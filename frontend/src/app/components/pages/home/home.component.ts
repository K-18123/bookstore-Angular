import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/shared/models/Book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: Book[] = [];
  constructor(private bookService: BookService, activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm){
        this.books=this.bookService.getAllBooksBySearchTerm(params.searchTerm)
      }
      else
      {
        this.books=bookService.getAll();
      }
    })
  }

  ngOnInit(): void {
    
  }
}
