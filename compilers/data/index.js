var rpgparser_data            = require('rpgparser-data')
var path                      = require('path')

var gameDataDir = path.join(__dirname, "..", "..", "source", "data")
var config = {
  shortcuts: ['moves'], //Data in shortcuts is duplicated into game_data root
  gameDataDir: gameDataDir,
  outputFile: path.join(__dirname, "..", "..", "game", "game_data.json"),
  debug: true,
  pointers: {}
}

rpgparser_data.init(config)
rpgparser_data.run(config)