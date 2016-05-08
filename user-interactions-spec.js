'use strinct'

var expect = chai.expect;
var v;

describe ("User Interation", function() {
  describe ("prompt", function() {
    it ("shows input field to the user", function() {});
    it ("returns user's input if the user enter text and clicks OK (even for empty input)", function() {});
    it ("returns null (for Safari, empty string) if the user clicks Cancel", function() {});
  });

  describe ("confirm", function() {
    it ("shows message to the user with to possible reactions: OK and Cancel", function() {});
    it ("returns true if the user clicks OK", function() {});
    it ("returns false if the user clicks Cancel", function() {});
  });

  describe ("alert", function() {
    it ("shows message to the user", function() {});
    it ("returns undefined", function() {});
  });
});
