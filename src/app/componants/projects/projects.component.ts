import { Component, Input, Output, EventEmitter, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../model/project';
import { ActivatedRoute } from '@angular/router';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';
import { TagsComponent } from '../tags/tags.component';
import { ProjectComponent } from '../project/project.component';
import {Title} from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Location } from '@angular/common';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet,RouterLink, RouterLinkActive,CategoriesComponent,TagsComponent,ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

  constructor(private projectService: ProjectService, private route: ActivatedRoute, private location: Location,

    private router: Router,private titleService : Title) {
    }
//private titleService : Title
  projects: Project[] = [];
  Urlsegment!: string;
  slugSegment!: string;
  searchTerm: string = '';
  noProjectsMessage: string = ''

  navigateToProjects(): void {
    this.router.navigate(['/projects']);  
  }

  getProjects(): void {
    this.projectService
      .getProjects()
      .subscribe((projects) => {
        // Sort projects based on category name
        projects.sort((a, b) => {
          if (a?.title < b?.title) {
            return -1;
          }
          if (a.title> b.title) {
            return 1;
          }
          return 0;
        });

        this.projects = projects;
      });
      this.Urlsegment = "";
      this.slugSegment = "";
      this.searchTerm = ""
  }
  getProjectsBySearch(searchTerm: string): void {
    this.searchTerm = String(this.route.snapshot.paramMap.get('searchTerm'));
    this.projectService
      .getProjectsBySearch(this.searchTerm)
      .subscribe((data) => (this.projects = data));
      this.slugSegment = searchTerm;
      this.Urlsegment = this.searchTerm
      // this.router.navigate(['/projects/search', searchTerm]);
      if (this.projects.length === 0) {
        this.noProjectsMessage = 'No projects found.';
      } else {
        this.noProjectsMessage = ''; // Clear the message if projects are found
      }
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


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const segment: string = this.route.snapshot.url[1]?.path;
      const searchTerm = this.route.snapshot.url[2]?.path;

      if (segment === 'categories') {
        this.getProjectsByCategory();
        this.titleService.setTitle(`Projects-${this.slugSegment}`);


      }else if(segment === 'tags') {
        this.getProjectsByTag();
        this.titleService.setTitle(`Projects-${this.slugSegment}`);

      } 
      else if (segment === 'search' && searchTerm !== undefined && searchTerm.trim() !== ''
      ) {
        this.getProjectsBySearch(searchTerm);
        this.titleService.setTitle(`Projects-search-${this.slugSegment}`);
    } 
      else {
        this.getProjects();
        this.titleService.setTitle(`Projects`);

      }
    });
    this.Urlsegment = this.route.snapshot.url[2]?.path || '';
  }
  goBack(): void {
    this.searchTerm = "";
    this.navigateToProjects();
  }


}
