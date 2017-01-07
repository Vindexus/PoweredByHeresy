module.exports = {
  name: 'Assassin',
  key: 'assassin',
  load: 5,
  base_max_wounds: 4,
  description: 'Good at fighting sneaky.',
  starting_moves: {
    points_to: 'moves',
    list: ['unsuspecting_strike', 'in_plain_sight', 'preferred_kill']
  },
  advanced_moves: {
    points_to: 'moves',
    list: ['silencing_strike', 'cheap_shot', 'underdog']
  },
  looks: [
    'Dead eyes, charming eyes, angry eyes',
    'Black bodysuit, plain clothes, dirty rags',
    'Buzz cut, elaborate hair, tattooed head',
    'Slim body, athletic body, huge body'],
  drives: [
    {
      name: 'Brutal',
      description: 'Make a mess of a kill to intimidate others.',
    }, {
      name: 'Shadow',
      description: 'Kill an enemy before they even know they\'re in danger.'
    }, {
      name: 'Reckless',
      description: 'Leap into danger before a plan is formed.'
    }
  ]
}