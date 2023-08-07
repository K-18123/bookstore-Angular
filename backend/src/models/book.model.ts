import { Schema , model,Types } from "mongoose";

export interface Book{
    id: string;
    name:string;
    price:number;
    categories:string[];
    favorite:boolean;
    decription: string;
    imageUrl: string;
}

export const BookSchema = new Schema<Book>(
    {
        id:{type:String, required:true},
        name: {type: String, required:true},
        price: {type: Number, required:true},
        categories: {type: [String] },
        favorite: {type: Boolean, required:false},
        decription: {type: String, required:true},
        imageUrl: {type: String, required:true},
    },
    {
        toJSON:{
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps:true
        
    }
    
)

export const BookModel = model<Book>('book', BookSchema)