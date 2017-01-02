var minimist = require('minimist')
var args = minimist(process.argv.slice(2))

var compilers = ['html', 'indesign', 'markdown', 'website']
if(args.compilers) {
  compilers = args.compilers.split(",")
}

console.log('Running compilers: ' + compilers.join(", "))

compilers.forEach(function (c) {
  require('./' + c)
})