'use strinct'

var expect = chai.expect;
var v;

describe ("Type convertion", function() {
  describe ("to boolean", function() {
    it ("for null is false", function() {
      expect(null).to.not.be.ok;
    });

    it ("for undefined is false", function() {
      expect(undefined).to.not.be.ok;
    });

    it ("for zero is false", function() {
      expect(0).to.not.be.ok;
    });

    it ("for empty string is false", function() {
      expect("").to.not.be.ok;
    });

    it ("for NaN is false", function() {
      expect(NaN).to.not.be.ok;
    });

    it ("everything else is true", function() {});
  });

  describe ("to string", function() {
    it ("for null is \"null\"", function() {
      expect(String(null)).to.equal("null");
    });

    it ("for undefined is \"undefined\"", function() {
      expect(String(undefined)).to.equal("undefined");
    });

    it ("for NaN is \"NaN\"", function() {
      expect(String(NaN)).to.equal("NaN");
    });

    it ("for true is \"true\"", function() {
      expect(String(true)).to.equal("true");
    });

    it ("for false is \"false\"", function() {
      expect(String(false)).to.equal("false");
    });

    it ("using string concat", function() {
      expect("" + 1 + null + undefined + NaN).to.equal("1nullundefinedNaN");
    });
  });

  describe ("to number", function() {
    it ("for null is 0", function() {
      expect(Number(null)).to.equal(0);
    });

    it ("for undefined is NaN", function() {
      expect(Number(undefined)).to.be.NaN;
    });

    it ("for true is 1", function() {
      expect(Number(true)).to.equal(1);
    });

    it ("for false is 0", function() {
      expect(Number(false)).to.equal(0);
    });

    describe ("for string", function() {
      it ("NaN if after cleaning all space characters there are letters", function() {
        expect(+"  13w").to.be.NaN;
      });

      it ("number (all space characters are ignored", function() {
        expect(+"  \t54.5").to.equal(54.5);
      });
    });

    it ("using unary plus operator", function() {
      expect(+null).to.equal(0);
    });
  });

  describe ("special cases", function() {
    it ("null is not equal zero (for == operator null have special behavior, it doesn't equal to anything accept undefined)", function() {
      expect(null == 0).to.be.false;
    });

    it ("null is not greater that zero (for > operator null converts to 0)", function() {
      expect(null > 0).to.be.false;
    });

    it ("null is equal or greater than zero (for >= operator null converts to 0)", function() {
      expect(null >= 0).to.be.true;
    });

    it ("undefined will return false when compare to anything accept null", function(){});

    it ("string \"0\" converts to true ", function(){
      expect("0").to.be.ok;
    });
  });
});
