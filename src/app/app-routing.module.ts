import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './ features/about-me/about-me.component';
import { ProjectsComponent } from './ features/projects/projects.component';
import { ReferencesComponent } from './ features/references/references.component';
import { ResumeComponent } from './ features/resume/resume.component';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./ features/home/home.module').then(m => m.HomeModule) },
  { path: 'about-me', loadChildren: () => import('./ features/about-me/about-me.module').then(m => m.AboutMeModule) },
  { path: 'projects', loadChildren: () => import('./ features/projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'references', loadChildren: () => import('./ features/references/references.module').then(m => m.ReferencesModule) },
  { path: 'resume', loadChildren: () => import('./ features/resume/resume.module').then(m => m.ResumeModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
