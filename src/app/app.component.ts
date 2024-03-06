import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsComponent } from './componants/projects/projects.component';
import { CategoriesComponent } from './componants/categories/categories.component';
import { TagsComponent } from './componants/tags/tags.component';
import { ProjectComponent } from './componants/project/project.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';

import {ProjectFilterPipe} from './pipes/project-filter.pipe'
import { ActivatedRoute, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink, RouterLinkActive, ProjectFilterPipe, ProjectsComponent,CategoriesComponent,TagsComponent,ProjectComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute

  ) {}

  title = 'Portfolio';
  name = 'Samaneh';
  year = new Date().getFullYear();
  segment!: string;
  // segment: string = this.route.snapshot.url[1]?.path;

  navigateToProjects(): void {
    this.router.navigate(['/projects']);  
  }
  ngOnInit(): void {
    // Use router.events to track route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Extract segment from the URL
        this.segment = this.route.snapshot.firstChild?.url[2]?.path || '';
      }
    });

}
}
