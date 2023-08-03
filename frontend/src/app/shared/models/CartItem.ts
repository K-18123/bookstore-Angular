import { Book } from "./Book";

export class CartItem{
    constructor(public book: Book){}
    quantity:number = 1;
    price:number=this.book.price;

}