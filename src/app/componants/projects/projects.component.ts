import { Component, Input, Output, EventEmitter, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectFilterPipe } from '../../pipes/project-filter.pipe';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../model/project';
import { Category } from '../../model/category';
import { Tag } from '../../model/tag';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectFilterPipe ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

  constructor(private projectService: ProjectService, private route: ActivatedRoute) {}

  projects: Project[] = [];

  // getProjects(): void {
  //   this.projects = this.projectService.getProjects();
  // }
  
  //asynchrony getting projects
  getProjects(): void {
    this.projectService
      .getProjects()
      .subscribe((projects) => (this.projects = projects));
  }
  getProjectsByCategory(): void {
    const categorySlug = String(this.route.snapshot.paramMap.get('slug'));
    this.projectService
      .getProjectsByCategory(categorySlug)
      .subscribe((data) => (this.projects = data));
  }

  getProjectsByTag(): void {
    const tagSlug = String(this.route.snapshot.paramMap.get('slug'));
    this.projectService
      .getProjectsByTag(tagSlug)
      .subscribe((data) => (this.projects = data));
  }
  // ngOnInit(): void {
  //   this.getProjects();
  // }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
      const segment: string = this.route.snapshot.url[1]?.path;
      if (segment === 'categories') {
        this.getProjectsByCategory();
      }else if(segment === 'tags') {
        this.getProjectsByTag();
      } 
      else {
        this.getProjects();
      }
    });
  }


}
