import { Routes } from '@angular/router';

import { ProjectsComponent } from './componants/projects/projects.component';
import { ProjectComponent } from './componants/project/project.component';
import { TagsComponent } from './componants/tags/tags.component';
import { CategoriesComponent } from './componants/categories/categories.component';



export const routes: Routes = [
    { path: '', component: ProjectsComponent, pathMatch: 'full' },
    { path: 'projects', component: ProjectsComponent, pathMatch: 'full' },
    { path: 'projects/tags', component: TagsComponent,pathMatch: 'full' },
    { path: 'projects/categories', component: CategoriesComponent,pathMatch: 'full' },

    { path: 'projects/:id', component: ProjectComponent },
    { path: 'projects/categories/:slug', component: ProjectsComponent },
    { path: 'projects/tags/:slug', component: ProjectsComponent },


    { path: 'categories', component: CategoriesComponent },


    // { path: '**', redirectTo: '' },
];
