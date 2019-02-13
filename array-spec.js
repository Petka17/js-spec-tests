'use strinct'

var expect = require('chai').expect;

describe ("Arrays", function() {
  it ("push method", function() {
    var arr = [];
    arr.push(1);
    arr.push(2);
    expect(arr).to.deep.equal([1, 2]);
  });

  it ("pop method", function() {
    var arr = [1, 2];
    expect(arr.pop()).to.equal(2);
    expect(arr).to.deep.equal([1]);
  });

  it ("unshift method", function() {
    var arr = [];
    arr.unshift(1);
    arr.unshift(2);
    expect(arr).to.deep.equal([2, 1]);
  });

  it ("shift method", function() {
    var arr = [2, 1];
    expect(arr.shift()).to.equal(2);
    expect(arr).to.deep.equal([1]);
  });

  it ("split method", function() {
    expect("123,TTT,PP,34".split(",")).to.deep.equal(["123", "TTT", "PP", "34"]);
  });

  it ("join method", function() {
    expect(["123", "TTT", "PP", "34"].join(",")).to.equal("123,TTT,PP,34");
  });

  it ("splice method [chages base array]", function() {
    var arr = [1, 2, 2, 5];
    expect(arr.splice(2, 1, 3, 4)).to.deep.equal([2]);
    expect(arr).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it ("slice method [doesn't change base array]", function() {
    var arr = [1, 2, 2, 5];
    expect(arr.slice(2, 3)).to.deep.equal([2]);
    expect(arr).to.deep.equal([1, 2, 2, 5]);
  });

  it ("sort method [chages base array], default sort as a string", function() {
    var arr = [1, 2, 12, 5];
    expect(arr.sort()).to.deep.equal([1, 12, 2, 5]);
    expect(arr).to.deep.equal([1, 12, 2, 5]);
  });

  it ("sort method [chages base array], pass sort function", function() {
    var arr = [1, 2, 12, 5, 1];
    expect(arr.sort(function(a, b){ return a - b })).to.deep.equal([1, 1, 2, 5, 12]);
    expect(arr).to.deep.equal([1, 1, 2, 5, 12]);
  });

  it ("reverse method [chages base array]", function() {
    var arr = [1, 2, 12, 5, 1];
    expect(arr.reverse()).to.deep.equal([1, 5, 12, 2, 1]);
    expect(arr).to.deep.equal([1, 5, 12, 2, 1]);
  });

  it ("concat method [doesn't change base array]", function() {
    var arr = [1, 2];
    expect(arr.concat(3, [4, 5])).to.deep.equal([1, 2, 3, 4, 5]);
    expect(arr).to.deep.equal([1, 2]);
  });

  it ("indexOf method [doesn't change base array]", function() {
    var arr = [1, 2, "2"];
    expect(arr.indexOf("2")).to.equal(2);
    expect(arr).to.deep.equal([1, 2, "2"]);
  });

  it ("Object.keys method will return array of the keys for the object", function() {
    var obj = { name: 'test', age: 22 };
    expect(Object.keys(obj)).to.deep.equal(['name', 'age']);
  });

  it ("forEach method as a alternative way to loop through an array", function() {
    var arr = [1, 2, 3];
    var sum = 0;
    var length = 0;
    arr.forEach(function(item, i) {sum += item; length = i + 1});

    expect(sum).to.equal(6);
    expect(length).to.equal(3);
  });

  it ("filter method will return a new filtered array", function() {
    expect([1, 2, 3].filter(function(item, i) {return i > 1;})).to.deep.equal([3]);
  });

  it ("map method will return a new array where each element will be constructed by applying the function to the original element", function() {
    expect([1, 2, 3].map(function(item, i) {return i * item})).to.deep.equal([0, 2, 6]);
  });

  it ("every method will return true if all elements will pass the check", function() {
    expect([1, 2, 3].every(function(item, i) {return item > 0})).to.be.true;
  });

  it ("some method will return true if at least one element will pass the check", function() {
    expect([1, 2, 3].some(function(item, i) {return item > 2})).to.be.true;
  });

  it ("reduce method will return accumulative value", function() {
    expect([1, 2, 3].reduce(function(value, item) {return value + item}, 0)).to.equal(6);
  });

  it ("reduce method will return accumulative value", function() {
      expect([1, 2, 3].reduce(function(value, item) {return value + item})).to.equal(6);
  });
});
