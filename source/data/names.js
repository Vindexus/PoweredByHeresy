var maleNames = ['Gaius', 'Bragg', 'Mikkal', 'Ibram', 'Kade', 'Othol', 'Eli', 'Lambdus']
var femaleNames = ['Ellyn', 'Fernanda', 'Xandra', 'Nelia', 'Lirri', 'Dahlia', 'Fenra', 'Rhia']
var nicknames = ['Shiv', 'Grimshine', 'Bullet', 'Tooth', 'Krak', 'Dusk', 'Carver', 'Spider']
var table = []

for(var i = 0; i < maleNames.length; i++) {
  table.push({
    d: (i+1).toString(),
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