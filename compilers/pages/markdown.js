var Parser                    = require('rpgparser-pages')
var parser                    = new Parser()
var path                      = require('path')
var config                    = require('./config')
var toMarkdown                = require('to-markdown')

var c = JSON.parse(JSON.stringify(config))
c.outputExtension = 'md'
c.outputDir = path.join(__dirname, '..', '..', 'game', 'github')

parser.init(c)
parser.registerPackagedStep('xml2html', c.htmlStepConfig)
parser.registerStep(function (content, name, config, done) {
  done(toMarkdown(content))
})
parser.run()