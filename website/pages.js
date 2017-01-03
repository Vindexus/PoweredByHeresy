var slugify = require('slug')
var path = require('path')
var fs = require('fs')
var gameData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'game', 'game_data.json'), 'utf8'))

var pages = {
  introduction: {
    label: 'Home',
    title: 'Introduction'
  },
  playingthegame: {
    label: 'Playing the Game',
    submenu: [{
      label: 'Playing the Game',
      url: '#playing-the-game'
    }, {
      label: 'The Setting',
      url: '#the-setting'
    }]
  },
  specialmoves: {
    label: 'Special Moves',
    submenu: []
  },
  advancedmoves: {
    label: 'Advanced Moves',
    submenu: []
  },
  basicmoves: {
    label: 'Basic Moves',
    submenu: []
  },
  warrior: {
    label: 'Warrior',
    submenu: []
  }
}

//TODO: Make this a loop you dingus
var movePages = ['specialmoves', 'basicmoves', 'advancedmoves']
movePages.forEach(function (page) {
  gameData[page].forEach(function (move) {
    pages[page].submenu.push({
      label: move.name,
      url: '#' + slugify(move.name, {lower: true})
    })
  })
})


gameData.specialties_list.forEach(function (spec) {
  pages[spec.key].submenu.push({
    label: 'Starting Moves',
    url: '#starting-moves',
    submenu: spec.starting_moves.map(function (move) {
      return {
        label: move.name,
        url: '#' + slugify(move.name, {lower: true})
      }
    })
  })
})

for(var key in pages) {
  pages[key].key = key
  pages[key].title = pages[key].title ? pages[key].title : pages[key].label
}

module.exports = pages