import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Project } from '../../model/project';
import { ProjectService } from '../../services/project.service';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location
  ) {}
  project?: Project;

  getProject(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.project = this.projectService.getProject(id);
  }

  getProjectBySlug(): void {
    // const slug = this.route.snapshot.paramMap.get('slug');
    const segment: string = this.route.snapshot.url[1]?.path;
    this.project = this.projectService.getProjectBySlug(segment);
  }

  ngOnInit(): void {
    this.getProjectBySlug();
  }


  goBack(): void {
    this.location.back();
  }

}
