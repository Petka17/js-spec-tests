'use strinct'

var expect = chai.expect;
var v;

describe ("String Properties and Methods", function() {
  it ("length will return number of letters", function() {
    expect("test".length).to.equal(4);
  });

  it ("charAt will return character from the position", function() {
    expect("test".charAt(2)).to.equal("s");
  });

  it ("charAt on empty string will return for empty string", function() {
    expect("".charAt(0)).to.equal("");
  });

  it ("String as a array of characters: s[i] will return character from the position", function() {
    expect("test"[2]).to.equal("s");
  });

  it ("String as a array of characters: s[i] will return undefined for empty string", function() {
    expect(""[0]).to.be.undefined;
  });

  it ("toUpperCase will return new string with all upper case letters", function() {
    expect("tEst".toUpperCase()).to.equal("TEST");
  });

  it ("toLowerCase will return new string with all lower case letters", function() {
    expect("tEst".toLowerCase()).to.equal("test");
  });

  it ("indexOf will return position of substring", function() {
    expect("tEst".indexOf("st")).to.equal(2);
  });

  it ("indexOf will return -1 if the substring is not in the string", function() {
    expect("tEst".indexOf("ss")).to.equal(-1);
  });

  it ("laseIndexOf search from the backwards", function() {
    expect("tEst-tEst".lastIndexOf("tE")).to.equal(5);
  });

  it ("substring(start[, end]) will return substring from position start to end, excluding end", function() {
    expect("tEst-tEst".substring(2, 4)).to.equal("st");
  });

  it ("substring has strange login for negative arguments", function() {
    expect("tEst-tEst".substring(4, -1)).to.equal("tEst");
  });

  it ("substr(start[, length]) will return substring from position start with determined length", function() {
    expect("tEst-tEst".substr(2, 2)).to.equal("st");
  });

  it ("slice(start[, end]) will return substring from position start to end, excluding end", function() {
    expect("tEst-tEst".slice(2, 4)).to.equal("st");
  });

  it ("String.fromCharCode(code)", function() {
    expect(String.fromCharCode(97)).to.equal("a");
  });

  it ("charCodeAt method will return unicode for the character at the position", function() {
    expect("abc".charCodeAt(0)).to.equal(97);
  });

  it ("str1.localeCompare(str2) method will return -1 if the str1 < str2", function() {
    expect("Ёлки".localeCompare("Яблоки")).to.equal(-1);
  });
});
