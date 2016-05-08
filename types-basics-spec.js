'use strinct'

var expect = chai.expect;

describe ("Simple Types", function() {
  describe ("names", function() {
    it ("23 equals to 'number' string", function() {
      expect(23).to.be.a("number");
    });

    it ("true equals to 'boolean' string", function() {
      expect(true).to.be.a("boolean");
    });

    it ("\"foo\" string equals to 'string' string", function() {
      expect("foo").to.be.a("string");
    });

    it ("undefine equals to 'undefine' string", function() {
      expect(undefined).to.be.a("undefined");
    });

    it ("null equals to 'null' string", function() {
      expect(null).to.be.a("null");
    });

    it ("typeof null equals to 'object' string [official error in language spec]", function() {
      expect(typeof null).to.equal("object");
    });

    it ("empty object equals to 'object' string", function() {
      expect({}).to.be.a("object");
    });

    it ("function equals to 'function' string", function() {
      expect(function(){}).to.a("function");
    });
  });

  describe ("null", function() {
    it ("means there is nothing", function() {});
  });

  describe ("undefine", function() {
    it ("means it is impossible for now to determine the value", function() {});
  });

  describe ("number", function() {
    it ("division by zero returns Infinity constant", function() {
      expect(1 / 0).to.be.Infinity;
    });

    it ("division by zero returns -Infinity constant", function() {
      expect(-1 / 0).to.equal(-Infinity);
    });

    it ("ariphmetic operation with string (which can't be converted to numbers) returns NaN constant", function() {
      expect(isNaN("QQQ" / 0)).to.equal(true);
    });

    describe ("decimal delimeter is dot", function() {
      it ("1.2 = 1.2", function() {
        expect(1.2).to.equal(1.2);
      });

      it ("1,2 = 1", function() {
        expect(1,2).to.equal(1);
      });
    });
  });
});
