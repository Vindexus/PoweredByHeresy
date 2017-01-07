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
    submenu: [
      {
        label: 'Playing the Game',
        url: '/playingthegame#playing-the-game'
      }, {
        label: 'The Setting',
        url: '/playingthegame#the-setting'
      }, {
        label: 'The Mission',
        url: '/playingthegame#the-setting'
      }, {
        label: 'Making Moves',
        url: '/playingthegame#making-moves',
        submenu: [
          {
            url: '#moves-and-dice',
            label: 'Moves and Dice'
          }, {
            url: '#moves-and-equipment',
            label: 'Moves and Equipment'
          }, {
            url: '#the-effects-of-moves',
            label: 'The Effects of Moves'
          }
        ]
      }, {
        label: 'Damage and Wounds',
        url: '/playingthegame#damage-and-wounds',
        submenu: [
          {
            url: '/playingthegame#damage',
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
          }
        ]
      }, {
        label: 'Character Change',
        url: '/playingthegame#character-change',
        submenu: [
          {
            url: '#level-up',
            label: 'Level Up'
          }
        ]
      }
    ]
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


gameData.classes_list.forEach(function (cl) {
  pages[cl.key] = {
    label: cl.name,
    submenu: []
  }
  pages[cl.key].submenu.push({
    label: 'Stats',
    url: '#stats'
  })
  pages[cl.key].submenu.push({
    label: 'Look',
    url: '#look'
  })
  pages[cl.key].submenu.push({
    label: 'Drive',
    url: '#drive'
  })
  pages[cl.key].submenu.push({
    label: 'Starting Moves',
    url: '#starting-moves',
    submenu: cl.starting_moves.map(function (move) {
      return {
        label: move.name,
        url: '#' + slugify(move.name, {lower: true})
      }
    })
  })
  if(cl.advanced_moves) {
    pages[cl.key].submenu.push({
      label: 'Advanced Moves',
      url: '#advanced-moves',
      submenu: cl.advanced_moves.map(function (move) {
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