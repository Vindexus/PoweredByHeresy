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

parser.registerHelper(function (Handlebars, gameData) {
  Handlebars.registerHelper('move', function(options) {
    var move = Handlebars.helpers.getMove(options)
    var base = 'moves'
    if(move.special) {
      page = 'specialmoves'
    }
    else {
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