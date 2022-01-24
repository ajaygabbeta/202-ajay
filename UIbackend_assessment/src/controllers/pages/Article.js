import { fetchArticles } from '../../services/Article.js';

const getArticlesPage = ( req, res, next ) => {
    fetchArticles()
        .then(Articles => {
            res.render( 'Articles', {
                Articles: Articles
            });
        });
};

export {
    getArticlesPage
};