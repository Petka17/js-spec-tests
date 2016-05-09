'use strinct'

var expect = chai.expect;
var v;

describe ("Objects", function() {
  it ("operator in", function() {
    expect("name" in {name: 'test'}).to.be.true;
  });

  it ("operator delete", function() {
    v = {name: 'test', age: 5};
    delete v.age;
    expect(v).to.deep.equal({name: 'test'});
  });

  it ("operator for..in", function() {
    v = {name: 'test', age: 5};
    for (var key in v) delete v[key];
    expect(v).to.deep.equal({});
  });
});
