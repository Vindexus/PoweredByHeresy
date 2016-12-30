var Parser                    = require('rpgparser-pages')
var parser                    = new Parser()
var path                      = require('path')
var config                    = require('./config')
var toMarkdown                = require('to-markdown')
var slugify                   = require('slug')

var c = JSON.parse(JSON.stringify(config))
c.outputExtension = 'md'
c.outputDir = path.join(__dirname, '..', '..', 'game', 'github')

parser.init(c)
parser.registerPackagedStep('xml2html', c.htmlStepConfig)

//TODO: This code is super duplicated. Need some general helpers for grabbing game data.
parser.registerHelper(function (Handlebars, gameData) {
  Handlebars.registerHelper('move', function(options) {
    if(!options) {
      return ''
    }
    console.log('options', options)
    //TODO: this code is duplciated in the move helper in helpers.js
    var move
    if(typeof(options) == 'string') {
      move = gameData.moves[options]
    }
    else if(typeof(options) == 'object') {
      if(options.fn) {
        move = gameData.moves[options.fn(this)]
      }
      else {
        move = options
      }
    }
    if(!move) {
      console.error('Failed to load move with: ' + options)
      return 'ERROR'
    }
    var page = 'moves'
    var specialKeys = gameData.specialmoves.map(function (m) {
      return m.key
    })
    var basicKeys = gameData.basicmoves.map(function (m) {
      return m.key
    })
    console.log('specialKeys.indexOf(move.key)', specialKeys.indexOf(move.key))
    if(specialKeys.indexOf(move.key) >= 0) {
      page = 'specialmoves'
    }
    else if(basicKeys.indexOf(move.key) >= 0) {
      page = 'basicmoves'
    }
    return new Handlebars.SafeString('<a href="https://github.com/Vindexus/PoweredByHeresy/blob/master/game/github/' + page + '.md#' + slugify(move.name, {lower: true}) + '">' + move.name + '</a>')
  })
})

parser.registerStep(function (content, name, config, done) {
  var md = toMarkdown(content, {
    converters: [{
      filter: function (node) {
        return node.nodeName == 'DIV'
      },
      replacement: function (c) {
        return c
      }
    }],
    ghf: true 
  })
  done(md)
})
parser.run()