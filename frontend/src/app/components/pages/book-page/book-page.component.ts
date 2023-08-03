import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';
import { Book } from 'src/app/shared/models/Book';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
  book!: Book;
  
  constructor(activatedRoute:ActivatedRoute, bookService:BookService,
    private cartService:CartService, private router: Router){
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.book = bookService.getBookById(params.id)
      
    })
  }

  ngOnInit(): void {
    
  }
  addToCart(){
    this.cartService.addToCart(this.book);
    this.router.navigateByUrl('/cart-page')
  }
}
