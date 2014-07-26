var expect = require('chai').expect;
var kindleImporter = require('../kindleImporter');

describe('The KindleImporter', function() {

  it('should parse a book', function() {
    var rawText = 'Instapaper: Friday, Dec. 20 (Instapaper)\n' +
                '- Your Highlight on Location 87-88 | Added on Thursday, December 26, 2013 4:09:46 PM\n\n' +
                'Include non-technical people on the development team as analysts and testers.\n' +
                '==========';

    var resultBooks = kindleImporter.parse(rawText);

    expect(resultBooks).to.have.length(1);
    expect(resultBooks[0].title).to.equals('Instapaper: Friday, Dec. 20 (Instapaper)');    
    expect(resultBooks[0].content).to.equals('Include non-technical people on the development team as analysts and testers.');    
  });

});