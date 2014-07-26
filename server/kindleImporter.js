
var regex =/[^\r\n]+/g;

var kindleImporter = {
    parse: function(rawContent){
        var data = rawContent.split('\n');

        var books = [];

        var bookSection = [];
        for(var i=0; i<data.length; i++){
            if(data[i] === '=========='){
                books.push(bookSection);
                bookSection = [];
            }else{
                bookSection.push(data[i]);
            }
        }

        var result = [];
        // parse single book notes
        for(var i=0; i<books.length; i++){
            var book = {};
            book.title = books[i][0];
            book.content = books[i][3];

            result.push(book);
        }

        return result;
    }
};

module.exports = kindleImporter;