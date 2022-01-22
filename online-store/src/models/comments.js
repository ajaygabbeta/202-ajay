import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    
    commenter: {
        type: string,
        required: true,
        
        
    },
    title: {
        type: String
    },
    comment: {
        type: string,
        
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
});

export default commentSchema;