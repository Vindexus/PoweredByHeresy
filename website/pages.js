var slugify = require('slug')
var path = require('path')
var fs = require('fs')
var gameData = require('./lib/gamedata')

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
    }, {
      label: 'The Mission',
      url: '#the-setting'
    }, {
      label: 'Making Moves',
      url: '#making-moves',
      submenu: [{
        url: '#moves-and-dice',
        label: 'Moves and Dice'
      }, {
        url: '#moves-and-equipment',
        label: 'Moves and Equipment'
      }, {
        url: '#the-effects-of-moves',
        label: 'The Effects of Moves'
      }]
    }, {
      label: 'Damage and Wounds',
      url: '#damage-and-wounds',
      submenu: [{
        url: '#damage',
        label: 'Damage'
      }, {
        url: '#wounds',
        label: 'Wounds'
      }, {
        url: '#defense',
        label: 'Defense'
      }, {
        url: '#dealing-damage-and-inflicting-wounds',
        label: 'Dealing Damage and Inflicting Wounds'
      }, {
        url: '#taking-damage-and-suffering-wounds',
        label: 'Taking Damage and Suffering Wounds'
      }, {
        url: '#example-of-damage-dealing',
        label: 'Example of Damage Dealing'
      }]
    }]
  },
  thegm: {
    label: 'The GM',
    submenu: [{
      label: 'Agenda',
      url: '#agenda'
    }, {
      label: 'Moves',
      url: '#moves'
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
  classes: {
    label: 'Classes'
  },
  assassin: {
    label: 'Assassin',
    submenu: []
  },
  seeker: {
    label: 'Seeker',
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


gameData.classes_list.forEach(function (spec) {
  pages[spec.key].submenu.push({
    label: 'Stats',
    url: '#stats'
  })
  pages[spec.key].submenu.push({
    label: 'Look',
    url: '#look'
  })
  pages[spec.key].submenu.push({
    label: 'Drive',
    url: '#drive'
  })
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
  if(spec.advanced_moves) {
    pages[spec.key].submenu.push({
      label: 'Advanced Moves',
      url: '#advanced-moves',
      submenu: spec.advanced_moves.map(function (move) {
        return {
          label: move.name,
          url: '#' + slugify(move.name, {lower: true})
        }
      })
    })
  }
})

for(var key in pages) {
  pages[key].key = key
  pages[key].title = pages[key].title ? pages[key].title : pages[key].label
}

module.exports = pages