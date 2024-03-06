import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';

import { Tag } from '../../model/tag';
import { TagService } from '../../services/tag.service';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss'
})
export class TagsComponent {
  constructor(private tagService: TagService) {}

  tags: Tag[] = [];
  getTags(): void {
    this.tags = this.tagService.getTags();
  }
  ngOnInit(): void {
    this.getTags();
  }

}
