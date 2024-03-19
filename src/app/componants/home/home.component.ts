import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser'
import { Router } from '@angular/router'; // Import Router


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private titleService : Title,  private router: Router ) {
    this.titleService.setTitle("Home")
  }
  title = 'Software Developer in Training';
  name = 'Samaneh Heshmatzadeh';
  Explore(){
    this.router.navigate(['/about']); // Navigate to the /about route

}
}
