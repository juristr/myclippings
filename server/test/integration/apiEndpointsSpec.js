var expect = require('chai').expect;
var fs = require('fs');
var request = require('supertest');

describe('The Api', function() {
  var url = 'http://localhost:3000';

  it('should return pong when invoking /ping', function(done) {
    request(url)
      .get('/ping')
      .expect(200)
      .expect('pong', done);
  });


});