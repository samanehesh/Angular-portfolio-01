import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Project } from '../../model/project';
import { ProjectService } from '../../services/project.service';
import {Title} from '@angular/platform-browser'
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectComponent implements OnInit{
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location,
    private titleService : Title, 
    private cdr: ChangeDetectorRef

  ) {

  }
  project?: Project;
  repo?: string | null;
  userName = "samanehesh"
  showRepo: boolean = false; // Add boolean property to track visibility

  
  getProject(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.project = this.projectService.getProject(id);
    this.repo = this.project.repo;

  }

  async getProjectBySlug(): Promise<void> {
    const segment: string = this.route.snapshot.url[1]?.path;
    this.project = await this.projectService.getProjectBySlug(segment);
    this.repo = this.project.repo;
  }

  async ngOnInit(): Promise<void> {
    await this.getProjectBySlug();
    this.titleService.setTitle(`Project-${this.project?.title}`);
    this.repo = this.project?.repo;
    this.cdr.detectChanges(); // Trigger change detection
  }

  goBack(): void {
    this.location.back();
  }
  toggleRepo(): void {
    this.showRepo = !this.showRepo; // Toggle the boolean property
  }

}
