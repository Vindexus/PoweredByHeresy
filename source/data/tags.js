var tags = {
  clumsy: {
    description: 'Take -1 ongoing while you wear this.'
  }
}

for(var k in tags) {
  tags[k].key = k
  if(!tags[k].name) {
    tags[k].name = k.split("_").map(function (w) { return w.substr(0,1).toUpperCase() + w.substr(1)}).join(" ")
  }
}

module.exports = tags