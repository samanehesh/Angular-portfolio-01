import { Component, Renderer2 } from '@angular/core';
import {Title} from '@angular/platform-browser';
//import { MatExpansionModule } from '@angular/material/expansion'; // Import MatExpansionModule


@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    //MatExpansionModule // Add MatExpansionModule to imports array
  ],
    templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  constructor(private titleService : Title, private renderer: Renderer2) {
    this.titleService.setTitle("Resume");}
    DownloadFile(){
      const link = this.renderer.createElement('a');
      link.setAttribute('target', '_blank');
      link.setAttribute('href', '../../../assets/resume.pdf');
      link.setAttribute('download', 'resume.pdf');
      link.click();
      link.remove();


}
  
}
