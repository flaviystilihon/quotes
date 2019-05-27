const express = require('express');
const quotesRouter = express.Router();

const quotesModule = require('../modules/quotes_module');

quotesRouter.post("/add", (req, res) => {
    quotesModule.addQuote(req.body).then(() => {
        res.redirect('/');
    });
})

module.exports = quotesRouter;