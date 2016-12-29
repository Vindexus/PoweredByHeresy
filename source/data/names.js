var maleNames = ['Gaius', 'Bragg']
var femaleNames = ['Ellyn', 'Fernanda']
var nicknames = ['Shiv', 'Grimshine']
var table = []

for(var i = 0; i < maleNames.length; i++) {
  table.push({
    male: maleNames[i],
    female: femaleNames[i],
    nickname: nicknames[i]
  })
}

module.exports = {
  male: maleNames,
  female: femaleNames,
  nicknames: nicknames,
  table: table
}