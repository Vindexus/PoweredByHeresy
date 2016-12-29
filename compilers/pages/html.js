var Parser                    = require('rpgparser-pages')
var parser                    = new Parser()
var path                      = require('path')
var config                    = require('./config')

var c = JSON.parse(JSON.stringify(config))
c.outputExtension = 'html'
c.outputDir = path.join(__dirname, '..', '..', 'game', 'html')
c.header = "<html><body>"
c.footer = "</body></html>"

parser.init(c)
parser.registerPackagedStep('xml2html', c.htmlStepConfig)
parser.run()