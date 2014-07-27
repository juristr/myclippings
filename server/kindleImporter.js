
var NOTE_SEPARATOR = '==========';

var extractClippings = function(data) {
  var books = [];

  var clippingSection = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].indexOf(NOTE_SEPARATOR) > -1) {
      books.push(clippingSection);
      clippingSection = [];
    } else {
      clippingSection.push(data[i]);
    }
  }

  return books;
}


var kindleImporter = {
  parse: function(rawContent) {
    var data = rawContent.split('\n');

    var books = extractClippings(data);


    var result = [];
    // parse single book notes
    for (var i = 0; i < books.length; i++) {
      result.push({
        title: books[i][0],
        content: books[i][3]
      });
    }

    return result;
  }
};

module.exports = kindleImporter;