import express from "express";
import cors from "cors"
import { sample_books, sample_categories } from "./data";


const app= express();
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/books", (req, res) => {
    res.send(sample_books);
})

app.get("/api/books/search/:searchTerm", (req, res) => {
    const searchTerm  = req.params.searchTerm;
    const books = sample_books.filter(book => book.name.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(books);
  })

app.get("/api/books/categories", (req, res) => {
    res.send(sample_categories);
})

app.get("/api/books/category/:categoryName", (req, res) => {
    const categoryName = req.params.categoryName;
    const books = sample_books
    .filter(book => book.categories?.includes(categoryName));
    res.send(books);
})

app.get("/api/books/:bookId", (req, res) => {
    const bookId = req.params.bookId;
    const book = sample_books.find(book => book.id == bookId);
    res.send(book);
})

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})