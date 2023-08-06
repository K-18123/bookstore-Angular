import express from "express";
import cors from "cors"
import { sample_books, sample_categories, sample_users } from "./data";
import jwt from "jsonwebtoken"

const app= express();
app.use(express.json())

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

app.post("/api/users/login",  (req, res) => {
    const {email, password} = req.body;
    const user = sample_users.find(user => user.email === email 
        && user.password === password);
        if(user) {
            res.send(generateTokenReponse(user));
           }
           else{
             const BAD_REQUEST = 400;
             res.status(BAD_REQUEST).send("Username or password is invalid!");
           }

})

const generateTokenReponse = (user : any) => {
    const token = jwt.sign({
      email:user.email, isAdmin: user.isAdmin
    },"SomeRandomText",{
      expiresIn:"30d"
    });
  
    user.token = token;
    return user;
  }

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})

