var fs = require('fs')
var path = require('path')
var json = fs.readFileSync(path.join(__dirname, '..', 'game_data.json'), 'utf8')

module.exports = JSON.parse(json)