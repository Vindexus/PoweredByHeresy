module.exports = {
  name: 'Templar',
  key: 'templar',
  base_max_wounds: 5,
  load: 8,
  description: 'You are the embodiment of the Emperor\'s vengeance and Wrath is your currency.',
  resource: 'Wrath',
  starting_moves: {
    points_to: 'moves',
    list: ['wrath_embodied', 'penance', 'smite', 'divine_will']
  },
  advanced_moves: {
    points_to: 'moves',
    list: ['holy_vengeance', 'know_thy_enemy']
  }
}