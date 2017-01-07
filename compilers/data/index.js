var Parser                    = require('rpgparser-data')
var parser                    = new Parser()
var path                      = require('path')

var gameDataDir = path.join(__dirname, "..", "..", "source", "data")
var config = {
  shortcuts: ['moves', 'classes'], //Data in shortcuts is duplicated into game_data root
  gameDataDir: gameDataDir,
  outputFiles: [path.join(__dirname, "..", "..", "game", "game_data.json"),
    path.join(__dirname, "..", "..", "website", "game_data.json")],
  debug: true,
  pointers: {}
}

parser.init(config)
parser.registerStep(function (data) {
  var lists = ['starting_moves', 'advanced_moves']
  console.log('data.classes_list', data.classes_list)

  function movesPages (l, page) {
    l.forEach(function (moveKey) {
      data.moves[moveKey].page = page
    })
  }

  data.classes_list.forEach(function (classKey) {
    var cl = data.classes[classKey]
    console.log('cl.name', cl.name)
    lists.forEach(function (list) {
      if(cl[list]) {
        movesPages(cl[list], cl.key)
      }
    })
  })

  movesPages(data.basicmoves, 'basic')
  movesPages(data.specialmoves, 'special')
  movesPages(data.advancedmoves, 'advanced')

  return data
})
parser.run(config)