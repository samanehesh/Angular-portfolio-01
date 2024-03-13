import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private titleService : Title) {
    this.titleService.setTitle("Home")
  }
  title = 'Software Developer in Trainee';
  name = 'Samaneh Heshmatzadeh';
}
