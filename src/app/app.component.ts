import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute

  ) {}

  title = 'Software Developer';
  name = 'Samaneh Heshmatzadeh';
  year = new Date().getFullYear();

  toggleMenu() {
    console.log("menuuuuuuuuuuuuuu")
    const body = document.body;
    console.log("body", body)

    const nav = document.getElementById('main-navigation');
    console.log("nav", nav)

    body.classList.toggle('show');
    nav?.classList.toggle('activated');
  }

}

