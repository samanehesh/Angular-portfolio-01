import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser'
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(private titleService : Title,  private router: Router) {
    this.titleService.setTitle("About")
  }
  Explore(){
    this.router.navigate(['/projects']); // Navigate to the /about route

}
}
