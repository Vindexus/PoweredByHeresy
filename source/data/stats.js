module.exports = {
  ws: {
    name: 'Weapon Skill',
    description: 'How well you can hit things.',
    abbr: 'WS'
  },
  bs: {
    name: 'Ballistic Skill',
    description: 'How well you can shoot.',
    abbr: 'BS'
  },
  str: {
    name: 'Strength',
    description: 'How much you can bench press.',
    abbr: 'S'
  },
  t: {
    name: 'Toughness',
    description: 'How much of a beating you can take.',
    abbr: 'T'
  },
  ag: {
    name: "Agility",
    abbr: 'Ag',
    description: 'How quick you are.'
  },
  int: {
    name: 'Intelligence',
    abbr: 'Int',
    description: 'How much you know, how smart you are.'
  },
  per: {
    name: 'Perception',
    abbr: 'Per',
    description: 'How much you notice things.'
  },
  wp: {
    name: 'Willpower',
    abbr: 'WS',
    description: 'How strong your mind is.'
  },
  fel: {
    name: 'Fellowship',
    abbr: 'Fel',
    description: 'How much people like you.'
  },
  starting: ['-1', '-1', '0', '0', '0', '+1', '+1', '+2'],
  list: {
    points_to: 'stats',
    list: ['ws', 'bs', 'str', 't', 'ag', 'int', 'per', 'wp', 'fel']
  }
}