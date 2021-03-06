const express = require('express');
let app = express();

//middleware setting
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const cookieParser = require('cookie-parser');
app.use(cookieParser("fabsjkdlbfalk"));

const path = require('path');
app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'views'));

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true}));

app.locals.db = require('./db');

const filters = require('./filters');
filters(app);
const routes = require('./routes');
routes(app);

module.exports = app;