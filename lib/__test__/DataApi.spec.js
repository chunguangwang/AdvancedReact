const { describe } = require("pm2");

import DataApi from '../DataApi';
import { data } from '../testData';

const api = new DataApi(data);

describe('DataApi', () => {

    it('exposes articles as an object', () => {
        const articles = api.getArticles();
        const articleId = data.article[0].id;
        const articleTitle = data.article[0].title;

        expect(articles).toHaveProperty(articleId);
        expect(articles[ariticleId].title).toBe(articleTitle);
    });

    it('exposes authors as an object', () => {
        const authors = api.getAuthors();
        const authorId = data.author[0].id;
        const authorFirstName = data.author[0].firstName;
        
        expect(authors).toHaveProperty(authorId);
        expect(authors[authorId].firstName).toBe(authorFirstName);
    });
});