var slugify = require('slug')
var path = require('path')
var fs = require('fs')
var gameData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'game', 'game_data.json'), 'utf8'))

var menus = {
  main_menu: [{
      label: 'Home',
      key: '',
      url: '/'
    }, {
      label: 'Introduction',
      key: 'introduction',
      url: '/introduction'
    }, {
      label: 'Playing the Game',
      key: 'playingthegame',
      url: '/playingthegame'
    }
  ],
  submenus: {
    playingthegame: {
      'playing-the-game': {
        url: '#playing-the-game',
        label: 'Playing the Game'
      },
      'setting': {
        url: '#the-setting',
        label: 'The Setting'
      },
      'mission': {
        url: '#the-mission',
        label: 'The Mission'
      },
      'conversation': {
        url: '#the-game-as-a-conversation',
        label: 'The Game as a Conversation'
      }
    },
    basicmoves: {},
    specialmoves: {},
    advancedmoves: {}
  }
}

//TODO: Make this a loop you dingus
gameData.specialmoves.forEach(function (move) {
  menus.submenus.specialmoves[move.key] = {
    label: move.name,
    url: '#' + slugify(move.name, {lower: true})
  }
})

gameData.basicmoves.forEach(function (move) {
  menus.submenus.basicmoves[move.key] = {
    label: move.name,
    url: '#' + slugify(move.name, {lower: true})
  }
})

gameData.advancedmoves.forEach(function (move) {
  menus.submenus.advancedmoves[move.key] = {
    label: move.name,
    url: '#' + slugify(move.name, {lower: true})
  }
})

gameData.specialties_list.forEach(function (spec) {
  menus.submenus[spec.key] = {
    'starting-moves': {
      label: 'Starting Moves',
      url: '#starting-moves'
    }
  }
})

module.exports = menus