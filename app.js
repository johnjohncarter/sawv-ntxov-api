let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

const dotenv = require('dotenv');
dotenv.config();

let database = require('./config/database');
database.connection();

let indexRouter = require('./app/routes/index');
let apiRouter = require('./app/routes/api/index');
let lineRouter = require('./app/routes/line/index');
let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/webhook', (req, res) => res.sendStatus(200));
app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/line', lineRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
