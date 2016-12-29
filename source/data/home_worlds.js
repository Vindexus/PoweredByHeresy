var worlds = {
  death_world: {
    name: 'Death World',
    description: 'Planet where everything wants to kill you.',
    move: 'Death World characters gain +1 on all Last Breath rolls.',
    stats: ['ag', 't']
  },
  feral_world: {
    name: 'Feral World',
    description: 'A planet with very little technology.',
    move: 'Feral World characters +1 piercing when using primitive weapons.',
    stats: ['str', 't']
  },
  forge_world: {
    name: 'Forge World',
    description: 'Manufactorums cover the landscape.',
    move: 'Forge World characters replace one of their d6s with a d8 when rolling Tech-Use.',
    stats: ['int', 't']
  },
  highborn: {
    name: 'Highborn',
    description: 'You are the member of a noble house, or powerful family.',
    move: 'Highborn characters gain +1 to any Defy Danger or Parley rolls that involve talking to members of the Imperium.',
    stats: ['fel', 'int']
  },
  hive_world: {
    name: 'Hive World',
    description: 'Hab blocks and cityscape cover much of this planet.',
    move: 'Hive World characters gain +1 to any Defy Danger rolls when moving through crowds.',
    bonus: 'Choose one advanced move from the general Advanced Moves list.',
    stats: ['ag', 'per']
  },
  shrine_world: {
    name: 'Shrine World',
    description: 'This world is dedicated to the veneration of the God-Emperor and his saints.',
    move: 'Shrine World characters can reroll any double 1s result once per session.',
    stats: ['fel', 'wp']
  },
  voidborn: {
    name: 'Voidborn',
    description: 'You were born in the cold of space aboard a ship.',
    move: 'Voidborn gain +1 to any rolls to resist warp energy.',
    bonus: '+1 starting XP',
    stats: ['int', 'wp']
  }
}
var list = []
for(var k in worlds) {
  worlds[k].key = k
  list.push(worlds[k])
}

list.sort(function (a, b) {
  var x = a.name; var y = b.name;
  return ((x < y) ? -1 : ((x > y) ? 1 : 0));
})

worlds.list = list
module.exports = worlds;