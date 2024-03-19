import { Routes } from '@angular/router';

import { ProjectsComponent } from './componants/projects/projects.component';
import { ProjectComponent } from './componants/project/project.component';
import { TagsComponent } from './componants/tags/tags.component';
import { CategoriesComponent } from './componants/categories/categories.component';
import {AboutComponent} from './componants/about/about.component'
import {ContactComponent} from './componants/contact/contact.component'
import {HomeComponent} from './componants/home/home.component'
import {ResumeComponent} from './componants/resume/resume.component'
import {GitHubComponent} from './componants/git-hub/git-hub.component'


export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },

    { path: 'projects', component: ProjectsComponent, pathMatch: 'full' },
    { path: 'projects/tags', component: TagsComponent, pathMatch: 'full' },
    { path: 'projects/categories', component: CategoriesComponent, pathMatch: 'full' },

    { path: 'projects/:slug', component: ProjectComponent },
    { path: 'projects/categories/:slug', component: ProjectsComponent },
    { path: 'projects/tags/:slug', component: ProjectsComponent },
    
    { path: 'about', component: AboutComponent, pathMatch: 'full' },
    { path: 'contact', component: ContactComponent, pathMatch: 'full' },
    { path: 'resume', component: ResumeComponent, pathMatch: 'full' },
    { path: 'github', component: GitHubComponent, pathMatch: 'full' },






    { path: '**', redirectTo: '' },
];
