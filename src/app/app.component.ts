import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsComponent } from './componants/projects/projects.component';
import { CategoriesComponent } from './componants/categories/categories.component';
import { TagsComponent } from './componants/tags/tags.component';
import { ProjectComponent } from './componants/project/project.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';


import { Project } from './model/project';
import { Category } from './model/category';
import { Tag } from './model/tag';

import {ProjectFilterPipe} from './pipes/project-filter.pipe'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink, RouterLinkActive, ProjectFilterPipe, ProjectsComponent,CategoriesComponent,TagsComponent,ProjectComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Portfolio';
  name = 'Samaneh';
  year = new Date().getFullYear();

  categoryFilter : Category | undefined;
  tagFilter: Tag |undefined

  selectedProject?: Project;
  setSelectedProject(project: Project) {
    this.selectedProject = project;
  }

  clearSelectedProject() {
    this.selectedProject = undefined;
  }
// this function set the category filter
  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
    this.tagFilter = undefined;
  }

// this function set the tag filter
  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
    this.categoryFilter = undefined;
  }

// this function clears tag and category filter
  clearFilters(){
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
  }

}
