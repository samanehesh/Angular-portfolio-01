import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Category } from '../../model/category';
import { CategoryService } from '../../services/category.service';
import {Title} from '@angular/platform-browser'

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  constructor(private categoryService: CategoryService, private titleService : Title) {
        this.titleService.setTitle("Categories");

  }

  categories: Category[] = [];
  getCategories(): void {
    this.categories = this.categoryService.getCategories();
  }
  ngOnInit(): void {
    this.getCategories();
  }


}
