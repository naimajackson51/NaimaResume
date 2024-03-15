import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule } from '@angular/material/button'
import { RouterModule } from '@angular/router';
import { AboutMeComponent } from './ features/about-me/about-me.component';
import { ResumeComponent } from './ features/resume/resume.component';
import { ReferencesComponent } from './ features/references/references.component';
import { ProjectsComponent } from './ features/projects/projects.component';
import { AboutMeModule } from './ features/about-me/about-me.module';
import { HomeModule } from './ features/home/home.module';
import { ResumeModule } from './ features/resume/resume.module';
import { ProjectsModule } from './ features/projects/projects.module';
import { ReferencesModule } from './ features/references/references.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScaleModule } from './ features/scale/scale.module';




@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    RouterModule,
    AboutMeModule,
    HomeModule,
    ResumeModule,
    ProjectsModule,
    ReferencesModule,
    BrowserAnimationsModule
  ]
})
export class AppModule { }
