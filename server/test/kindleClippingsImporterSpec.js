var expect = require('chai').expect,
  fs = require('fs'),
  kindleImporter = require('../kindleImporter');

describe('The KindleImporter', function() {

  it('should parse a book', function(done) {
    fs.readFile(__dirname + '/singleClipping.txt', 'utf8', function(err, data) {
      if (err)
        throw err;

      var resultBooks = kindleImporter.parse(data);

      expect(resultBooks).to.have.length(1);
      expect(resultBooks[0].title).to.contain('Clipping Title');
      expect(resultBooks[0].content).to.contain('Content clipping 1');

      done();
    });
  });

  it('should parse multiple books', function(done){
    fs.readFile(__dirname + '/multipleClippings.txt', 'utf8', function(err, data){
      if(err)
        throw err;

      var resultBooks = kindleImporter.parse(data);

      expect(resultBooks).to.have.length(2);
      expect(resultBooks[1].title).to.contain('Clipping Title 2');
      done();
    });
  });

});