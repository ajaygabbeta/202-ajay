/**
 * Controller extracts information (query string parameters, path parameters etc., makes a call a call to the service to get data, and sends the response)
 */
// import { fetchArticles } from '../services/Articles.cjs';
import {
  fetchArticles,
  fetchArticleById,
  addArticle,
  updateArticle,
  removeArticle,
  addcomment,
  fetchcomments
} from "../services/Articles.js";
import HttpError from '../utils/HttpError.js';

// /Articles?sort=name&order=asc&minPrice=10&minRating=4&page=2&q=garden
const getArticles = (req, res, next) => {
  // Extract minPrice from query string and log it as well
  let { sort, order, page, q } = req.query;

  // convert page to integer, and set a default of 1 if it is not passed / incorrect
  let pageInt = parseInt(page); // parseInt( 'hello' ) -> NaN, parseInt( undefined ) -> NaN

  if (isNaN(pageInt)) {
    pageInt = 1;
  }

  // if sort field is not passed, we assume it is sorted by name
  if (!sort) {
    sort = "name";
  }

  // if sorting order is not passed, we assume it is sorted in ascending order
  if (!order) {
    order = "asc";
  }

  fetchArticles(sort, order, pageInt, q)
    .then((Articles) => {
        res.json(Articles);
    })
    .catch((err) => {
        // eg. DB connection error
        // 500 -> Internal Server Error
        const httpError = new HttpError( err.message, 500 );
        next( httpError );
    });
};

// GET /products/:_id
// Example: /products/61dd7711cbf3176114766adb
const getArticleById = (req, res, next) => {
  const { _id } = req.params;

  fetchArticleById(_id)
    .then((Article) => {
      if( !Article ) {
          // 404 -> Not Found
          const httpError = new HttpError( 'Article with given id does not exist', 404 );
          next( httpError );
          return;
      }

      res.json(Article);
    })
    .catch((err) => {
      if( err.kind === 'ObjectId' ) {
          // 400 -> BAD REQUEST
          const httpError = new HttpError( 'Invalid Article id', 400 );
          next( httpError );
      } else {
          // eg. DB connection error
          // 500 -> Internal Server Error
          const httpError = new HttpError( err.message, 500 );
          next( httpError );
      }
    });
};

// POST /Articles
const postArticle = (req, res, next) => {
  const { body } = req;
  console.log( Object.keys( body ) );

  // check if the body is an empty object
  if( Object.keys( body ).length === 0 ) {
    const httpError = new HttpError( 'Request body is empty. Article details are missing.', 400 );
    next( httpError );
    return;
  }

  addArticle( body )
    .then(Article => {
      res.status( 201 ).json( Article );
    })
    .catch(err => {
      const httpError = new HttpError( err.message, 400 );
      next( httpError );
    });
};

// PUT /Articles/:_id
const putArticle = ( req, res, next ) => {
  const { body } = req;
  const { _id } = req.params;

  // check if the body is an empty object
  if( Object.keys( body ).length === 0 ) {
    const httpError = new HttpError( 'Request body is empty.Article details are missing.', 400 );
    next( httpError );
    return;
  }

  updateArticle( _id, body )
    .then(Article => {
      res.json( Article);
    })
    .catch(err => {
      if( err.kind === 'ObjectId' ) {
        // 400 -> BAD REQUEST
        const httpError = new HttpError( 'Invalid Article id', 400 );
        next( httpError );
      } else {
          // eg. DB connection error
          // 500 -> Internal Server Error
          const httpError = new HttpError( err.message, 500 );
          next( httpError );
      }
    });
};

const deleteArticle = ( req, res, next ) => {
  const { _id } = req.params;

  removeArticle( _id )
    .then(() => {
      res.status(204).json();
    })
    .catch(err => {
      if( err.kind === 'ObjectId' ) {
        // 400 -> BAD REQUEST
        const httpError = new HttpError( 'Invalid Article id', 400 );
        next( httpError );
      } else {
          // eg. DB connection error
          // 500 -> Internal Server Error
          const httpError = new HttpError( err.message, 500 );
          next( httpError );
      }
    });
};

// POST /:_id/reviews
const postcomment = (req, res, next) => {
  const { _id } = req.params;
  const { body } = req;

  // check if the body is an empty object
  if( Object.keys( body ).length === 0 ) {
    const httpError = new HttpError( 'Request body is empty. comment details are missing.', 400 );
    next( httpError );
    return;
  }

  addcomment( _id, body )
    .then(Article => {
      res.status( 201 ).json( Article );
    })
    .catch(err => {
      const httpError = new HttpError( err.message, 400 );
      next( httpError );
    });
};

const getcomments = (req, res, next) => {
  const { _id } = req.params;

  fetchcomments( _id )
    .then((comments) => {
        res.json(comments);
    })
    .catch((err) => {
        const httpError = new HttpError( err.message, 500 );
        next( httpError );
    });
}

export { getArticles, getArticleById, postArticle, putArticle, deleteArticle, postcomment, getcomments };
