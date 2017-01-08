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
  },
  drives: {
    bad_cop: {
      name: 'Bad-Cop',
      description: 'Force subjects to reveal their truth to you.'
    },
    unchecked: {
      name: 'Unchecked',
      description: 'Give in to your rage and let loose.'
    },
    good_cop: {
      name: 'Good-Cop',
      description: 'Get suspects to open up without using violence.'
    },
    connect_the_dots: {
      name: 'Connect The Dots',
      description: 'Connect the clues to find a lead.'
    },
  }
}