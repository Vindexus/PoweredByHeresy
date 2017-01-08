module.exports = function (Handlebars, gameData) {
  /*
  These helpers are for use in other helpers
  */
  Handlebars.registerHelper('getStatistic', function (options) {
    var err = {name: 'ERROR in getStatistic'}
    if(!options) {
      err.name += ' !options'
      return err
    }
    var key = typeof(options) == 'string' ? options : options.fn(this)
    var stat = gameData.stats[key]
    if(!stat) {
      err.name = ' !stat ' + key
      return err
    }
    return stat
  })

  Handlebars.registerHelper('getTag', function (options) {
    var err = {name: 'ERROR in getTag'}
    if(!options) {
      return err
    }
    var key = typeof(options) == 'string' ? options : options.fn(this)
    var tag = gameData.tags[key]
    if(!tag) {
      return err
    }
    return tag
  })

  Handlebars.registerHelper('getTerm', function (options, n) {
    var err = {name: 'ERROR in getTerm'}
    if(!options) {
      err.name = 'ERROR in getTerm !options'
      return err
    }
    var key = typeof(options) == 'string' ? options : options.fn(this)
    var term = gameData.terms[key]
    if(!term) {
      err.name = 'No term with key: "' + key + '"'
      return err
    }
    if(term.n) {
      if(!n) {
        n = 'n'
      }
      term.name = term.name.split('{n}').join(n)
      term.description = term.description.split('{n}').join(n)
    }
    return term
  })

  Handlebars.registerHelper('getClass', function (options) {
    var err = {name: 'ERROR in getClass'}
    if(!options) {
      console.error('options in getclass', options)
      err.name = 'ERROR in getClass (no options)'
      return err
    }
    var c
    var method
    if(typeof(options) == 'string') {
      c = gameData.classes[options]
      method = 'string'
    }
    else if(typeof(options) == 'object') {
      if(options.fn) {
        var key = options.fn(this)
        console.log('key', key)
        c = gameData.classes[key]
        method = 'options.fn'
      }
      else {
        c = options
        method = 'options is object'
      }
    }
    if(!c) {
      console.error('Failed to load class with ' + method + ': ' + JSON.stringify(options).substr(0, 50))
      return err
    }
    return c
  })

  Handlebars.registerHelper('getMove', function (options) {
    var err = {name: 'ERROR'}
    if(!options) {
      err.name += '! options'
      return err
    }
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
      console.error('Failed to load move with: ' + options)
      return err
    }
    var page = 'moves'
    var specialKeys = gameData.specialmoves.map(function (m) {
      return m.key
    })
    var basicKeys = gameData.basicmoves.map(function (m) {
      return m.key
    })

    if(specialKeys.indexOf(move.key) >= 0) {
      move.special = true
    }
    else if(basicKeys.indexOf(move.key) >= 0) {
      move.basic = true
    }
    return move
  })

  /********************
  These are for use in the actual templates.
  *********************/

  Handlebars.registerHelper('statistic', function(options) {
    var stat = Handlebars.helpers.getStatistic(options)
    return new Handlebars.SafeString(stat.name)
  })

  Handlebars.registerHelper('tag', function(options) {
    var tag = Handlebars.helpers.getTag(options)
    return new Handlebars.SafeString(tag.name)
  })

  Handlebars.registerHelper('class', function(options) {
    var c = Handlebars.helpers.getClass(options)
    return new Handlebars.SafeString(c.name)
  })

  Handlebars.registerHelper('stat', function(options) {
    var stat = Handlebars.helpers.getStatistic(options)
    return new Handlebars.SafeString(stat.abbr)
  })

  Handlebars.registerHelper('term', function(options, n) {
    var term = Handlebars.helpers.getTerm(options, n)
    return new Handlebars.SafeString(term.name)
  })

  /* 
  Returns the name of a move 
  This can be overridden for certain compilers to change it to a link, or add data to its attributes
  */
  Handlebars.registerHelper('move', function(options) {
    var move = Handlebars.helpers.getMove(options)
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
