var terms = {
  precision: {
    name: 'precision',
    description: 'After rolling with precision, you may reroll one of the die used.'
  },
  advantage: {
    name: 'advantage',
    description: 'When rolling with advantage, roll 3d6 and take the two hightest'
  },
  forward: {
    name: '{n} forward',
    description: 'The next time you roll a move, add {n} to your roll.',
    n: true
  },
  ongoing: {
    name: '{n} ongoing',
    description: 'Whenever you roll a move, add {n} to your roll.',
    n: true
  },
  ndefense: {
    name: '{n} defense',
    description: 'The higher your defense, the less likely each damage die rolled against you will inflict a wound.',
    n: true
  }
}

terms.defense = {
  name: 'defense',
  description: terms.ndefense.description
}

module.exports = terms