var express = require('express');
var gameData = require('../lib/gamedata')
var router = express.Router();

/* GET home page. */
router.get('/sheet/:class', function(req, res, next) {
  var cl = gameData[req.params.class]
  res.render('sheet', { title: cl.name, cl: cl });
});

module.exports = router;
