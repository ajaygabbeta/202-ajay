import express from 'express';
import {
    getArticles,
    getArticleById,
    postArticle,
    putArticle,
    deleteArticle,
    postcomments,
    getcomments
} from '../controllers/Articles.js';

// create a router
const router = express.Router();

// any user
router.get(    '/'    , getArticles );
router.get(    '/:_id', getArticleById );

// authorized for role = 'admin'
router.post(   '/'    ,  postArticle );
router.put(    '/:_id',  putArticle );
router.delete( '/:_id',  deleteArticle );

// any user
router.get(    '/:_id/comments', getcomments );

// authenticated users (logged-in users)
router.post(   '/:_id/comments',  postcomments);

// module.exports = router

// exporting single item in ES2015 export syntax
export default router;