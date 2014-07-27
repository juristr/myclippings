
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

    var createNewBook = function(rawClipping){
        var currentBook = {
          title: rawClipping.title,
          notes: []
        };
        currentBook.notes.push({
          content: rawClipping.content
        });

        return currentBook;
    }

    var finalResult = [];
    var currentBook;
    for (var i = 0; i < result.length; i++) {
      if (typeof (currentBook) === 'undefined') {
        currentBook = createNewBook(result[i]);
        finalResult.push(currentBook);
      } else {
        if (currentBook.title.indexOf(result[i].title) > -1) {
          currentBook.notes.push({
            content: result[i].content
          });
        } else {
          // another book starts
          currentBook = createNewBook(result[i]);
          finalResult.push(currentBook);
        }
      }
    }

    return finalResult;
  }

};

module.exports = kindleImporter;