import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Witty-App';
  logo = "/assets/images/logo.png"
  constructor(private router: Router) {

  }
  ngOnInit() {
    this.redirect('home')
  }
  redirect(component:string) {
    switch (component) {
      case 'about-me':
        this.router.navigate(['/about-me'])
        break;
      case 'resume':
        this.router.navigate(['/resume'])
        break;
      case 'projects':
        this.router.navigate(['/projects'])
        break;
      case 'references':
        this.router.navigate(['/references'])
        break;
      case 'home':
        this.router.navigate(['/home'])

    }
  }
}
