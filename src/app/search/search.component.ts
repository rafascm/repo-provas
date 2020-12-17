import { Component, OnInit } from '@angular/core';
import { ICategory } from '../category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public categories: ICategory[];

  constructor(private _categoryService: CategoryService) {
    this.categories = [];
  }

  ngOnInit(): void {
    this._categoryService
      .getCategories()
      .subscribe((data) => (this.categories = data));
  }
}
