'use strinct'

var expect = chai.expect;
var v;

describe ("Logical Context", function() {
  describe ("logical OR operator (||)", function() {
    it ("second expression won't be calculated if the first is true [true || (v = 1)]", function() {
      v = 0;
      true || (v = 1)
      expect(v).to.equal(0);
    });

    it ("returns the first non-false value in the chain [0 || \"test\" || true || false => \"test\"]", function() {
      expect(0 || "test" || true || false).to.equal("test");
    });

    it ("returns the last value if all values in the chain falsy [0 || \"test\" || true || false => \"test\"]", function() {
      expect(undefined || "" || false || 0).to.equal(0);
    });

    it ("shot form: x = y || z for if (y) x = y; else x = z;", function(){})
  });

  describe ("logical AND operator (&&)", function() {
    it ("second expression won't be calculated if the first is false [false && (v = 1)]", function() {
      v = 0;
      false && (v = 1);
      expect(v).to.equal(0);
    });

    it ("returns the first non-true value in the chain [1 && \"\" && true && \"test\" => \"\"]", function() {
      expect(1 && "" && true && "test").to.equal("");
    });

    it ("returns the last value if all values in the chain falsy [1 && \"q\" && true && \"rrr\" => \"rrr\"]", function() {
      expect(1 && "q" && true && "rrr").to.equal("rrr");
    });

    it ("shot form: x && y() for if (x) y();", function(){})
  });
});
