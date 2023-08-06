import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/shared/models/Book';
import { Category } from './../../../shared/models/Category';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: Book[] = [];
  constructor(private bookService: BookService, activatedRoute:ActivatedRoute){
    let booksObservalbe:Observable<Book[]>;
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm){
        booksObservalbe=this.bookService.getAllBooksBySearchTerm(params.searchTerm)
      }
      else if(params.category)
      {
        booksObservalbe=bookService.getAllBooksByCategory(params.category);
      }
      else
        booksObservalbe=bookService.getAll();

        booksObservalbe.subscribe((serverBooks) => {
          this.books=serverBooks;
        }) 
    })
  }

  ngOnInit(): void {
    
  }
}
