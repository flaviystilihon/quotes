const express = require('express');
const quotesRouter = express.Router();

const quotesModule = require('../modules/quotes_module');

quotesRouter.post("/add", (req, res, next) => {
    quotesModule.addQuote(req.body).then(() => {
        res.redirect('/');
    }).catch((err) => {
        next(err);
    });
})

module.exports = quotesRouter;