import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../model/project';
import { PROJECTS } from '../data/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  // getProjects(): Project[] {
  //   return PROJECTS;
  // }

  getProjects(): Observable<Project[]> {
    const projects = of(PROJECTS);
    return projects;
  }

  getProject(id: number): Project {
    return PROJECTS.find((p) => p.id === id)!;
  }

  getProjectsByCategory(slug: string): Observable<Project[]> {
    const projects = PROJECTS.filter(
      (project) => project.category?.slug === slug
    )!;
    return of(projects);
  }

  getProjectsByTag(slug: string): Observable<Project[]> {
    let filteredProjects = [];
    if (slug) {
      filteredProjects = PROJECTS.filter((project) => {
        return JSON.stringify(project.tags).indexOf(JSON.stringify(slug)) + 1;
      });
    } else {
      filteredProjects = PROJECTS;
    }

    return of(filteredProjects);
  }

}


