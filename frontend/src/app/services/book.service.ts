import { Injectable } from '@angular/core';
import { Book } from '../shared/models/Book';
import { sample_books } from 'src/data';


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
}
