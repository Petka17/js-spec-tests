'use strinct'

var expect = chai.expect;
var v;

describe ("Function", function() {
  describe ("Returns", function() {
    it ("undefine if no return statement", function() {
      expect(function(){}()).to.equal(undefined);
    });

    it ("undefine if there is return statement without params", function() {
      expect(function(){return;}()).to.equal(undefined);
    });
  });
});
