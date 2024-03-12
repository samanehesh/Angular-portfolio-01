import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Project } from '../../model/project';
import { ProjectService } from '../../services/project.service';
import {Title} from '@angular/platform-browser'


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit{
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location,
    private titleService : Title
  ) {
    // this.titleService.setTitle(`Project-${this.project?.title}`);

  }
  project?: Project;

  getProject(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.project = this.projectService.getProject(id);
  }

  async getProjectBySlug(): Promise<void> {
    const segment: string = this.route.snapshot.url[1]?.path;
    this.project = await this.projectService.getProjectBySlug(segment);
  }

  async ngOnInit(): Promise<void> {
    await this.getProjectBySlug();
    this.titleService.setTitle(`Project-${this.project?.title}`);
  }


  goBack(): void {
    this.location.back();
  }

}
