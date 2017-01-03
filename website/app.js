var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs')
var pages = require('./pages')

var index = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

function renderFilePage (req, res, next) {
  var pageName = req.params.file || 'introduction'
  var page = pages[pageName]
  if(!page) {
    return next(new Error('page not found: ' + pageName))
  }
  var filePath = path.join(__dirname, 'views', 'exported', page.key + '.html')
  var html = fs.readFileSync(filePath)
  res.locals.html = html
  res.locals.pageName = pageName
  res.locals.title = page.title

  if(page.hasOwnProperty('submenu')) {
    res.locals.submenu = page.submenu
  }

  res.render('file')
}

app.get('/:file', renderFilePage)
app.get('/', renderFilePage)

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
