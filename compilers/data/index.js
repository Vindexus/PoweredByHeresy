var Parser                    = require('rpgparser-data')
var parser                    = new Parser()
var path                      = require('path')

var gameDataDir = path.join(__dirname, "..", "..", "source", "data")
var config = {
  shortcuts: ['moves', 'specialties'], //Data in shortcuts is duplicated into game_data root
  gameDataDir: gameDataDir,
  outputFiles: [path.join(__dirname, "..", "..", "game", "game_data.json"),
    path.join(__dirname, "..", "..", "website", "game_data.json")],
  debug: true,
  pointers: {}
}

parser.init(config)
parser.run(config)