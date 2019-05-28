const express = require('express');
const indexRouter = express.Router();

const quotesModule = require('../modules/quotes_module');

indexRouter.get('/', function (req, res, next) {
    quotesModule.getAllQuotes().then((quotes) => {
        res.render('index.ejs', {quotes: quotes});
    }).catch((err) => {
        next(err);
    });

});

module.exports = indexRouter;