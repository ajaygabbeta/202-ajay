import mongoose from 'mongoose';
import commentSchema from './comments.js';

// schema for Article
const ArticleSchema = new mongoose.Schema({
    comments: {
        type: [ commentSchema ],
    },
    author: {
        type: String,
        required: true,
        
    },
     title: {
        type: String,
        required: true,
    
    },
    Abstract: {
        type: String,
        required: false
    },
    body: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
   

   
});

// register the model
// collection - Articles
mongoose.model( 'Article', ArticleSchema );