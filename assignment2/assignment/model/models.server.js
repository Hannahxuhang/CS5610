var mongoose = require('mongoose');

//var db = mongoose.connect('mongodb://localhost:27017/webdev'); //for local
var db = mongoose.connect('mongodb://root:password@ds263707.mlab.com:63707/heroku_rq9c4f5z'); //for heroku

module.exports = db;
