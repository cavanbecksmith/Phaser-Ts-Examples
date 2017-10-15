// Server 1
// var connect = require('connect');
// var serveStatic = require('serve-static');
// connect().use(serveStatic(__dirname + '/build')).listen(8080, function(){
//     console.log('Server running on 8080...');
// });




// Server 2
var connect  = require('connect');
var compiler = require('connect-compiler');
var static = require('serve-static');
 
var server = connect();
 
// server.use(
//   compiler({
//       // enabled : [ 'coffee', 'uglify' ],
//       src     : 'src',
//       dest    : 'build'
//   })
// );
 
server.use(  static(__dirname + '/build'));

console.log('Server running on port 3000')

server.listen(3000);
 
var livereload = require('livereload');
var lrserver = livereload.createServer();
console.log(lrserver);
lrserver.watch(__dirname + "/build");