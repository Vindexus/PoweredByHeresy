var path                      = require('path')
var source                    = path.join(__dirname, '..', '..', 'source')
var gameDir                   = path.join(__dirname, '..', '..', 'game')

module.exports = config = {
  gameDataFile: path.resolve(path.join(gameDir, 'game_data.json')),
  pagesDir: path.resolve(path.join(source,'pages')),
  partialsDir: path.resolve(path.join(source, 'partials')),
  helperFiles: [path.resolve(__dirname, 'helpers')],
  htmlStepConfig: {
    protectedNodeNames: ['div', 'ul', 'p', 'li', 'span', 'strong', 'em', 'nl', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'table', 'tr', 'thead', 'tbody', 'th', 'td', 'blockquote', 'abbr'],
    nodesToNodes: {
    'class-name': 'h1',
    'section-title': 'h2',
    'name': 'h3'
    },
    idsFromText: ['h1,h2,h3']
  }
}