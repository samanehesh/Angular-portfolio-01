import { Component, Input, Output, EventEmitter, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectFilterPipe } from '../../pipes/project-filter.pipe';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../model/project';
import { Category } from '../../model/category';
import { Tag } from '../../model/tag';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';
import { TagsComponent } from '../tags/tags.component';
import { ProjectComponent } from '../project/project.component';
import {Title} from '@angular/platform-browser'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink, RouterLinkActive, ProjectFilterPipe, ProjectsComponent,CategoriesComponent,TagsComponent,ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

  constructor(private projectService: ProjectService, private route: ActivatedRoute,
    private router: Router,private titleService : Title) {
    }
//private titleService : Title
  projects: Project[] = [];
  Urlsegment!: string;
  slugSegment!: string;
  navigateToProjects(): void {
    this.router.navigate(['/projects']);  
  }
  // getProjects(): void {
  //   this.projects = this.projectService.getProjects();
  // }
  
  //asynchrony getting projects
  getProjects(): void {
    this.projectService
      .getProjects()
      .subscribe((projects) => (this.projects = projects));
      this.slugSegment = "";
  }
  getProjectsByCategory(): void {
    const categorySlug = String(this.route.snapshot.paramMap.get('slug'));
    this.projectService
      .getProjectsByCategory(categorySlug)
      .subscribe((data) => (this.projects = data));
      this.slugSegment = categorySlug;

  }

  getProjectsByTag(): void {
    const tagSlug = String(this.route.snapshot.paramMap.get('slug'));
    this.projectService
      .getProjectsByTag(tagSlug)
      .subscribe((data) => (this.projects = data));
      this.slugSegment = tagSlug;

  }
  // ngOnInit(): void {
  //   this.getProjects();
  // }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      // console.log(params);
      const segment: string = this.route.snapshot.url[1]?.path;
      if (segment === 'categories') {
        this.getProjectsByCategory();
        this.titleService.setTitle(`Projects-${this.slugSegment}`);

      }else if(segment === 'tags') {
        this.getProjectsByTag();
        this.titleService.setTitle(`Projects-${this.slugSegment}`);
      } 
      else {
        this.getProjects();
        this.titleService.setTitle(`Projects`);
      }
    });
    this.Urlsegment = this.route.snapshot.url[2]?.path || '';
  }


}
