import { Component, HostListener } from '@angular/core';
// import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

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
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],

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
    // const body = document.getElementById('bodyWrapper');

    // console.log("body", body)
    const btn = document.getElementById('btn-menu');

    const nav = document.getElementById('main-navigation');
    console.log("nav", nav)
    btn?.classList.toggle('show');

    body?.classList.toggle('show');
    nav?.classList.toggle('show');
  }

  toggleNav() {
    console.log("menuuuuuuuuuuuuuu")
    const body = document.body;
    // const body = document.getElementById('bodyWrapper');

    // console.log("body", body)
    const btn = document.getElementById('btn-menu');

    const nav = document.getElementById('main-navigation');
    console.log("nav", nav)
    btn?.classList.toggle('show');

    body?.classList.toggle('show');
    nav?.classList.remove('show');
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log(event,"eventeeeeeeeeeee")
    const body = document.body;
    const nav = document.getElementById('main-navigation');
    if (window.innerWidth >= 760) {
      body.classList.remove('show');
      nav?.classList.remove('show');
    }
}

}

