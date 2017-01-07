module.exports = {
  name: 'Warrior',
  base_max_wounds: 6,
  load: 10,
  key: 'warrior',
  description: 'Good at fighting',
  starting_moves: {
    points_to: 'moves',
    list: ['tactical_advantage', 'lifting_the_fog', 'armored']
  },
  advanced_moves: {
    points_to: 'moves',
    list: ['baptised_by_bullets']
  },
  looks: [
    'Blank eyes, fiery eyes, kind eyes', 
    'Military cut, messy hair, headband, helmet', 
    'Worn uniform, utilitarian clothes, rags', 
    'Lean body, hulking body, lithe body'],
  drives: {
    destructive: {
      name: 'Destructive',
      description: 'Blow something up or dismember a foe.'
    },
    superious_position: {
      name: 'Superior Position',
      description: 'Gain an advantage due to better choice of terrain or surroundings.'
    },
    weapon_master: {
      name: 'Weapon Master',
      description: 'Use a new weapon in combat or begin training with one.'
    },
    honor_killer: {
      name: 'Honor Killer',
      description: 'Challenge a foe to 1v1 combat and defeat them.'
    }
  }
}