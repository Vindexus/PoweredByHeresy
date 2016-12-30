var Parser                    = require('rpgparser-pages')
var parser                    = new Parser()
var path                      = require('path')
var config                    = require('./config')
var slugify                   = require('slug')

var c = JSON.parse(JSON.stringify(config))
c.outputExtension = 'html'
c.outputDir = path.join(__dirname, '..', '..', 'game', 'html')
c.header = '<html><head><link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></head><body><div class="container">'
c.footer = "</div></body></html>"

parser.init(c)
parser.registerHelper(function (Handlebars, gameData) {
  Handlebars.registerHelper('statistic', function(options) {
    if(!options) {
      return ''
    }
    var key = typeof(options) == 'string' ? options : options.fn(this)
    var stat = gameData.stats[key]
    if(!stat) {
      console.error('Failed to load stat: ' + key)
      return 'ERROR'
    }
    return new Handlebars.SafeString('<span title="(' + stat.abbr + ') ' + stat.description + '">' + stat.name + '</span>')
  })
})
parser.registerHelper(function (Handlebars, gameData) {
  Handlebars.registerHelper('stat', function(options) {
    if(!options) {
      return ''
    }
    var key = typeof(options) == 'string' ? options : options.fn(this)
    var stat = gameData.stats[key]
    if(!stat) {
      console.error('Failed to load stat: ' + key)
      return 'ERROR'
    }
    return new Handlebars.SafeString('<abbr title="' + stat.name + ': ' + stat.description + '">' + stat.abbr + '</abbr>')
  })
})

//Override the 'move' helper so we can make it link
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
    return new Handlebars.SafeString('<a href="' + page + '.html#' + slugify(move.name, {lower: true}) + '">' + move.name + '</a>')
  })
})
parser.registerPackagedStep('xml2html', c.htmlStepConfig)
parser.run()