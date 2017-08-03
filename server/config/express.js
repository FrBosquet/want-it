const express       = require('express');
const bodyParser    = require('body-parser');
const cookieParser  = require('cookie-parser');
const logger        = require('morgan');
const path          = require('path');
const passport      = require('passport');
const mongoose      = require('mongoose');
const session       = require('express-session');
const flash         = require('connect-flash');
const MongoStore    = require('connect-mongo')(session);

module.exports = (app) => {
  let rootPath = path.normalize(__dirname+'/../');
  mongoose.connect(process.env.MONGO_DB_URL);
  //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  app.set('views', rootPath+'views');
  app.set('view engine', 'jade');
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(rootPath+'public'));
  app.use(session({
    secret: "wantit",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore( {
      mongooseConnection: mongoose.connection
    })
  }));
  app.use(flash());
};
