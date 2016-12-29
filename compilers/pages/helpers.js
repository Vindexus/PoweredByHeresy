module.exports = function (Handlebars, gameData) {
  Handlebars.registerHelper('stat', function(options) {
    if(!options) {
      return ''
    }
    var stat = options.fn(this)
    return new Handlebars.SafeString(gameData.stats[stat].name)
  })
}
