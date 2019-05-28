const express = require('express');
const bodyParser = require('body-parser');

const quotesRouter = require('./routers/quotesRouter');
const indexRouter = require('./routers/indexRouter');

const app = express();
app.listen(3000, function() {
    console.log('listening on 3000');
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', indexRouter);
app.use("/quotes", quotesRouter);

app.use(function(err, req, res, next) {
    console.log("===== Error has occurred! ======")
    console.log(err)
    console.log("===== Error has occurred! ======")

    res.status(500);
    res.render('error', {error: err});
})