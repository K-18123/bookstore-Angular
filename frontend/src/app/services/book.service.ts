import { Injectable } from '@angular/core';
import { Book } from '../shared/models/Book';
import { sample_books, sample_categories } from 'src/data';
import { Category } from '../shared/models/Category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BOOKS_BY_CATEGORY_URL, BOOKS_BY_SEARCH_URL, BOOKS_CATEGORIES_URL, BOOKS_URL, BOOK_BY_ID_URL } from '../shared/constants/urls';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http:HttpClient) { }

  getAll(): Observable<Book[]>{
    return this.http.get<Book[]>(BOOKS_URL);
  }

  getAllBooksBySearchTerm(searchTerm:string){
    return this.http.get<Book[]>(BOOKS_BY_SEARCH_URL + searchTerm);
  }

  getAllCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(BOOKS_CATEGORIES_URL);
  }

  getAllBooksByCategory(category:string): Observable<Book[]>{
    return category == "All"?
    this.getAll():
    this.http.get<Book[]>(BOOKS_BY_CATEGORY_URL + category);
  }
  
  getBookById(bookid:string):Observable<Book>{
    return this.http.get<Book>(BOOK_BY_ID_URL + bookid)
  }

}
