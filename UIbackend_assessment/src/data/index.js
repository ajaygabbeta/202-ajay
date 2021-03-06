import mongoose from 'mongoose';

// create the models
import '../models/Article.js';
import '../models/User.js';

const connectionStr = `mongodb://localhost:27017/online_store`;

// connect() returns a Promise object
mongoose
    .connect( connectionStr )
    .then(() => {
        console.log( `connected to the DB` );
    })
    .catch(err => {
        console.log( err.message );
    });