var Parser                    = require('rpgparser-pages')
var parser                    = new Parser()
var path                      = require('path')
var config                    = require('./config')
var slugify                   = require('slug')
var fs                        = require('fs')

var c = JSON.parse(JSON.stringify(config))
c.outputExtension = 'html'
c.outputDir = path.join(__dirname, '..', '..', 'game', 'html')
c.header = fs.readFileSync(path.join(__dirname, '..', '..', 'source', 'html', 'header.html'), 'utf8')
c.footer = fs.readFileSync(path.join(__dirname, '..', '..', 'source', 'html', 'footer.html'), 'utf8')

parser.init(c)
parser.registerHelper(function (Handlebars, gameData) {
  Handlebars.registerHelper('statistic', function(options) {
    var stat = Handlebars.helpers.getStatistic(options)
    return new Handlebars.SafeString('<span title="(' + stat.abbr + ') ' + stat.description + '">' + stat.name + '</span>')
  })
})
parser.registerHelper(function (Handlebars, gameData) {
  Handlebars.registerHelper('stat', function(options) {
    var stat = Handlebars.helpers.getStatistic(options)
    return new Handlebars.SafeString('<abbr title="' + stat.name + ': ' + stat.description + '">' + stat.abbr + '</abbr>')
  })
})

//Override the 'move' helper so we can make it link
parser.registerHelper(function (Handlebars, gameData) {
  Handlebars.registerHelper('move', function(options) {
    console.log('OPTIONS IN MOVE IN HTML', options)
    var move = Handlebars.helpers.getMove(options)
    var base = 'moves'
    if(move.special) {
      page = 'specialmoves'
    }
    else {
      page = 'basicmoves'
    }
    return new Handlebars.SafeString('<a href="' + page + '.html#' + slugify(move.name, {lower: true}) + '">' + move.name + '</a>')
  })
})
parser.registerPackagedStep('xml2html', c.htmlStepConfig)
parser.run()