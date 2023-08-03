import { Component, OnInit } from '@angular/core';
import { Category } from './../../../shared/models/Category';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories?:Category[];
  constructor(bookService:BookService){
    this.categories=bookService.getAllCategories();
  }
  ngOnInit(): void {
    
  }
}
