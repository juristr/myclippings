var fs = require('fs'),
    kindleImporter = require('./kindleImporter');

fs.readFile(__dirname + '/myclippings.txt', 'utf8', function(err, data){
  if(err)
    throw err;

  var books = kindleImporter.parse(data);

  console.log('Got ' + books.length + ' books');

  for(var i=0; i<books.length; i++){
    console.log(books[i].title);
    for(var j=0; j<books[i].notes.length; j++){
      console.log('  - ' + books[i].notes[j].content);
    }
    console.log('-----');
  }
})