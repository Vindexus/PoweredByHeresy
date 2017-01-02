module.exports = {
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
    }
  }
}