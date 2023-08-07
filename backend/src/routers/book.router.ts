import { Router } from "express";
import { sample_books, sample_categories } from "../data";
import asyncHandler  from 'express-async-handler';
import { BookModel } from "../models/book.model";


const router = Router();

router.get("/seed", asyncHandler(
    async (req, res) => {
        const booksCount = await BookModel.countDocuments();
        if(booksCount > 0){
            res.send("Seed is already done !");
            return;
        }
        await BookModel.create(sample_books);
        res.send("Seed is done")
    }
))
router.get("/",asyncHandler(
    async (req, res) => {
      const books = await BookModel.find();
        res.send(books);
    }
  ))


  router.get("/search/:searchTerm", asyncHandler(
    async (req, res) => {
      const searchRegex = new RegExp(req.params.searchTerm, 'i');
      const books = await BookModel.find({name: {$regex:searchRegex}})
      res.send(books);
    }
  ))

  router.get("/categories", asyncHandler(
    async (req, res) => {
      const categories = await BookModel.aggregate([
        {
          $unwind:'$categories'
        },
        {
          $group:{
            _id: '$categories',
            count: {$sum: 1}
          }
        },
        {
          $project:{
            _id: 0,
            name:'$_id',
            count: '$count'
          }
        }
      ]).sort({count: -1});
  
      const all = {
        name : 'All',
        count: await BookModel.countDocuments()
      }
  
      categories.unshift(all);
      res.send(categories);
    }
  ))
  

router.get("/category/:categoryName",asyncHandler(
    async (req, res) => {
      const books = await BookModel.find({categories: req.params.categoryName})
      res.send(books);
    }
  ))

// router.get("/:bookId", asyncHandler(
//     async (req, res) => {
//       const book = await BookModel.findById(req.params.bookId);
//       res.send(book);
//     }
//   ))
  
  router.get("/:bookId", async (req, res) => {
        const bookId = req.params.bookId;
        const book = await BookModel.findOne({ id: bookId });
        res.send(book);
});
export default router;