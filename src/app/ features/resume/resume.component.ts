import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  image = "/assets/images/stars-shooting.gif"
  resume = "/assets/images/resume.pdf"

  timeLine = [{
    year: '08/2021 – 11/2021', place:'Revature', detail: 'Created normalized databases to store user generated information for later retrieval, Brainstormed within a group to create a viable database and webpage routing model, Implemented XUnit testing to accomplish a Test Driven, Design to ensure proper function of my APIs' },
    {
      year: '01/2022 – PRESENT', place:'Imagine Software', detail: 'Ability to handle highly stressed situations and unexpected errors in an efficient manner, Coding, testing and fixing programming errors, Creating and executing unit test cases, Creation, releasing and confirming of process orders, bill of materials and variant configuration.' },
  
 

  ]

  educationTimeLine = [{ year: '08/2014 – 05/2018', place: 'Winthrop University', detail:'Biology | Bachelors Degree of Science' },
    { year: '01/2020 – 05/2022', place: 'Georgia State University', detail: 'Computer Science | Associates Degree of Science' },
    { year: '12/2021 – 03/2021', place: 'Remote', detail: 'Java Technology BootCamp Tech Talent South' }
  ]
}
