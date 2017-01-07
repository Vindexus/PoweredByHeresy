var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs')
var pages = require('./pages')
var gameData = require('./lib/gamedata')


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

/* Printable Character Sheet */
app.get('/sheet/:class', function(req, res, next) {
  var cl = gameData[req.params.class]
  var data = { 
    title: cl.name, 
    cl: cl, 
    background: {},
    home_world: {}
  }
  if(req.query.background) {
    if(gameData.backgrounds[req.query.background]) {
      data.background = gameData.backgrounds[req.query.background]
    }
  }
  if(req.query.home_world) {
    if(gameData.home_worlds[req.query.home_world]) {
      data.home_world = gameData.home_worlds[req.query.home_world]
    }
  }
  console.log('data', data)
  res.render('sheet', data);
});

app.get('/:file', renderFilePage)
app.get('/', renderFilePage)

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


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
