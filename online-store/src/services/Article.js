/**
 * Service talks to the database (data layer)
 */
import mongoose from "mongoose";
import config from "../utils/config.js";

const Article = mongoose.model("Article");

const fetchArticles = (sort, order, page, q) => {
  const skipClause = (page - 1) * config.PAGE_SIZE;

  const filterClause = {};

  if (q) {
    filterClause.description = {
      $regex: q,
      $options: "i", // ignore case
    };
  }

  console.log(filterClause);

  const sortClause = {
    [sort]: order === "desc" ? -1 : 1,
  };

  
  return Article
          .find(filterClause)
          .select( 'Author  title abstract body imageUrl createdAt' )
          .sort(sortClause)
          .skip(skipClause)
          .limit(config.PAGE_SIZE);
};



const fetchArticleById = (_id) => {
  return Article.findById(_id);
};

const addArticle = ( Article ) => {
  return Article.create(Article );
};

const updateArticle = ( _id, newArticleDetails ) => {
  // By default everything is $set
  // {
  //   $set: newProductDetails
  // }

  // NOTE: If you want to remove some property you need to create an updateClause this way and pass it instead to Product.findByIdAndUpdate
  // const updateClause = {
  //   $unset: {
  //     description: true
  //   }
  // };

  return Article.findByIdAndUpdate( _id, newArticleDetails, { new: true, runValidators: true } );
};

const removeArticle = ( _id ) => {
  return Article.findByIdAndRemove( _id );
};

const addcomment = ( _id, comment ) => {
  return Article.findByIdAndUpdate( 
    _id,
    {
      $push: {
        comments: comment
      }
    },
    {
      new: true,
      runValidators: true
    }
  );
};

const fetchcomment = ( _id ) => {
  return Article
          .findById( _id )
          .select( 'comments' )
          .then(Articlecomments => Articlecomments.comments)
}

export {
  fetchArticles,
  fetchArticleById,
  addArticle,
  updateArticle,
  removeArticle,
  addcomment,
  fetchcomment
};
