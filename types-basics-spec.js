'use strinct'

var expect = chai.expect;

describe ("Simple Types", function() {
  describe ("number", function() {
    it ("division by zero returns Infinity constant", function() {
      expect(1 / 0).to.equal(Infinity);
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

  describe ("null", function() {
    it ("means there is nothing", function() {});
  });

  describe ("undefine", function() {
    it ("means it is imposible for now to determine the value", function() {});
  });

  describe ("typeof", function() {
    it ("23 equals to 'number' string", function() {
      expect(typeof 23).to.equal("number");
    });

    it ("true equals to 'boolean' string", function() {
      expect(typeof true).to.equal("boolean");
    });

    it ("foo string equals to 'string' string", function() {
      expect(typeof "foo").to.equal("string");
    });

    it ("empty object equals to 'object' string", function() {
      expect(typeof {}).to.equal("object");
    });

    it ("undefine equals to 'undefine' string", function() {
      expect(typeof undefined).to.equal("undefined");
    });

    it ("null equals to 'object' string [official error in language spec]", function() {
      expect(typeof null).to.equal("object");
    });

    it ("function equals to 'function' string", function() {
      expect(typeof function(){}).to.equal("function");
    });
  });
});
