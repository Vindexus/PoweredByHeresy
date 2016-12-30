module.exports = function (Handlebars, gameData) {
  Handlebars.registerHelper('stat', function(options) {
    if(!options) {
      return ''
    }
    var stat = options.fn(this)
    return new Handlebars.SafeString(gameData.stats[stat].name)
  })

  Handlebars.registerHelper('csl', function(context, options) {
    var out = "", data;

    if (options.data) {
      data = Handlebars.createFrame(options.data);
    }

    for (var i=0; i<context.length; i++) {
      if (data) {
        data.index = i;
      }

      var sep
      if(i == 0) {
        sep = ""
      }
      else {
        if(i == context.length - 1) {
          if(options.hash.xand) {
            sep = ", and "
          }
          else if(options.hash.xor) {
            sep = ", or "
          }
          else if(options.hash.and) {
            sep = " and "
          }
          else if(options.hash.or) {
            sep = " or "
          }
          else {
            sep = ", "
          }
        }
        else {
          sep = ", "
        }
      }
      out += sep + options.fn(context[i], { data: data })
    }

    out += "";
    return out;
  });
}
