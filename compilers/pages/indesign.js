var Parser                    = require('rpgparser-pages')
var parser                    = new Parser()
var path                      = require('path')
var config                    = require('./config')

var c = JSON.parse(JSON.stringify(config))
c.outputExtension = 'xml'
c.outputDir = path.join(__dirname, '..', '..', 'game', 'indesign')
c.header = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<Root xmlns:aid=\"http://ns.adobe.com/AdobeInDesign/4.0/\" xmlns:aid5=\"http://ns.adobe.com/AdobeInDesign/5.0/\">"
c.footer = "</Root>"

parser.init(c)
parser.registerStep(function (content, name, config, done) {
  content = content.split("<ul>\n").join("<ul>")
  done(content.split("</li>\n</ul>").join("</li></ul>"))
})
parser.run()