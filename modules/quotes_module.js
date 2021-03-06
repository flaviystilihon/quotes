const MongoClient = require('mongodb').MongoClient;
var QuotesModule = {
    db_connection: null
};

QuotesModule.DBconnect = function() {
    return new Promise((resolve, reject) => {
        if(!QuotesModule.db_connection) {
            MongoClient.connect("mongodb://localhost:27017/", { useNewUrlParser: true }).then(function(connection) {
                QuotesModule.db_connection = connection.db("quotes");
                resolve(QuotesModule.db_connection);
            }).catch((err) => {
                reject(err);
            });
        } else {
            resolve(QuotesModule.db_connection);
        }
    });
}

QuotesModule.getAllQuotes = function() {
    return new Promise(function(resolve, reject) {
        QuotesModule.DBconnect().then(() => {
            return QuotesModule.db_connection.collection("quotes").find().toArray();
        }).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        })
    })
}

QuotesModule.addQuote = function(request_body) {
    return new Promise(function(resolve, reject) {
        QuotesModule.DBconnect().then(() => {
            return QuotesModule.db_connection.collection('quotes').insertOne({author: request_body.author, quote: request_body.quote});
        }).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        })
    })
}

module.exports = QuotesModule;