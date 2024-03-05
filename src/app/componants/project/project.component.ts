import { Component,Input } from '@angular/core';
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
  // @Input() project?: Project;
  project?: Project;

  getProject(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.project = this.projectService.getProject(id);
  }

  // call getMinifig() in the ngOnInit lifecycle hook
  ngOnInit(): void {
    this.getProject();
  }

  // add a goBack() method that uses the Location service to go back to the previous page
  // this is better than a link because it will work even if the user navigates to this page from a different source
  goBack(): void {
    this.location.back();
  }

}
