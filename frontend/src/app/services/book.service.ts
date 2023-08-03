import { Injectable } from '@angular/core';
import { Book } from '../shared/models/Book';
import { sample_books, sample_categories } from 'src/data';
import { Category } from '../shared/models/Category';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getAll():Book[]{
    return sample_books;
  }

  getAllBooksBySearchTerm(searchTerm:string){
    return this.getAll().filter(book => book.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllCategories(): Category[]{
    return sample_categories;
  }

  getAllBooksByCategory(category:string):Book[]{
    return category == "All"?
    this.getAll():
    this.getAll().filter(book=> book.categories?.includes(category));
  }
  
  getBookById(bookid:string):Book{
    return this.getAll().find(book => book.id == bookid) ?? new Book();
  }

}
