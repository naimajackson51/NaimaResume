import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MatIconModule } from '@angular/material/icon';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button'; 
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { ScaleComponent } from '../scale/scale.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';




@NgModule({
  declarations: [ResumeComponent, ScaleComponent],
  imports: [
    CommonModule,
    PdfViewerModule,
    ResumeRoutingModule,
    MatIconModule,
    TimelineModule,
    ButtonModule,
    CardModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSliderModule
  ]
})
export class ResumeModule { }
