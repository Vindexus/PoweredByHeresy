module.exports = function (Handlebars, gameData) {
  Handlebars.registerHelper('statistic', function(options) {
    if(!options) {
      return ''
    }
    var key = typeof(options) == 'string' ? options : options.fn(this)
    var stat = gameData.stats[key]
    if(!stat) {
      console.error('Failed to load stat: ' + key)
      return 'ERROR'
    }
    return new Handlebars.SafeString(stat.name)
  })

  Handlebars.registerHelper('stat', function(options) {
    if(!options) {
      return ''
    }
    var key = typeof(options) == 'string' ? options : options.fn(this)
    var stat = gameData.stats[key]
    if(!stat) {
      console.error('Failed to load stat: ' + key)
      return 'ERROR'
    }
    return new Handlebars.SafeString(stat.abbr)
  })

  /* 
  Returns the name of a move 
  This can be overridden for certain compilers to change it to a link, or add data to its attributes
  */
  Handlebars.registerHelper('move', function(options) {
    if(!options) {
      return ''
    }
    //TODO: this code is duplciated in the move helper in html.js
    var move
    if(typeof(options) == 'string') {
      move = gameData.moves[options]
    }
    else if(typeof(options) == 'object') {
      if(options.fn) {
        move = gameData.moves[options.fn(this)]
      }
      else {
        move = options
      }
    }
    if(!move) {
      console.error('Failed to load move:')
      return 'ERROR'
    }
    return new Handlebars.SafeString(move.name)
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
