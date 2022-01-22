/**
 * Service talks to the database (data layer)
 */
const Articles = require( '../data/Articles' );

const fetchArticles = () => Articles;

module.exports = {
    fetchArticles
};