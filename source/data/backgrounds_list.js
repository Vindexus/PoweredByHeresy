var backgrounds = require('./backgrounds')

var list = []
for(var key in backgrounds) {
  backgrounds[key].key = key
  list.push(backgrounds[key])
}

module.exports = list.sort(function (a, b) {
  if(a.name == b.name) {
    return 0
  }
  return a > b ? 1 : -1
})