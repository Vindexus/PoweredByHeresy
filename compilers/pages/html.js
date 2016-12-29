var Parser                    = require('rpgparser-pages')
var parser                    = new Parser()
var path                      = require('path')
var config                    = require('./config')

var c = JSON.parse(JSON.stringify(config))
c.outputExtension = 'html'
c.outputDir = path.join(__dirname, '..', '..', 'game', 'html')
c.header = '<html><head><link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></head><body><div class="container">'
c.footer = "</div></body></html>"

parser.init(c)
parser.registerHelper(function (Handlebars, gameData) {
  Handlebars.registerHelper('stat', function(options) {
    if(!options) {
      return ''
    }
    var key = typeof(options) == 'string' ? options : options.fn(this)
    var stat = gameData.stats[key]
    return new Handlebars.SafeString('<span title="(' + stat.abbr + ') ' + stat.description + '">' + stat.name + '</span>')
  })
})
parser.registerPackagedStep('xml2html', c.htmlStepConfig)
parser.run()