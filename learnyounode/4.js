var fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', function(err, data) {
  // return if (err) false;
  console.log(data.split("\n").length - 1);
});

// var fs = require('fs')
// var file = process.argv[2]
//
// fs.readFile(file, function (err, contents) {
//   // fs.readFile(file, 'utf8', callback) 使ってもいいです
//   var lines = contents.toString().split('\n').length - 1
//   console.log(lines)
// })
