module.exports = {
  name: 'Seeker',
  key: 'seeker',
  base_max_wounds: 6,
  load: 10,
  looks: [
  'Distrusting eyes, kind eyes, tired eyes', 
  'Helmeted head, military cut, or bald',
  'Plain clothes, worn outfit, or uniform',
  'Thin body, fit body, flabby body'
  ],
  description: 'Good at finding info.',
  starting_moves: {
    points_to: 'moves',
    list: ['confessor', 'detective', 'take_them_alive']
  },
  advanced_moves: {
    points_to: 'moves',
    list: ['this_ones_mine', 'torturer']
  }
}