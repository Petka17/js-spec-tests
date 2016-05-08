'use strinct'

var expect = chai.expect;
var v;

describe ("Number Properties and Methods", function() {
  it ("Number function will convert string to  number", function() {
    expect(Number("  12")).to.equal(12);
  });

  it ("Plus sign in front of the string will convert string to  number", function() {
    expect(+"  12").to.equal(12);
  });

  it ("isNaN will check if the value is NaN (non-numeric values converting to number)", function() {
    expect(isNaN(NaN)).to.be.true;
  });

  it ("isFinite for number (not NaN and not Infinity) will return true", function() {
    expect(isFinite(1)).to.be.true;
  });

  it ("isFinite for Infinity will return false", function() {
    expect(isFinite(Infinity)).to.be.false;
  });

  it ("isFinite for NaN will return false", function() {
    expect(isFinite(NaN)).to.be.false;
  });

  it ("isFinite will convert the value to number for non-numeric values", function() {
    expect(isFinite("")).to.be.true;
  });

  it ("parseInt for string will return number if the first non-space character is digit", function() {
    expect(parseInt("12px")).to.equal(12);
  });

  it ("second argument for parseInt is the scale of notation", function() {
    expect(parseInt("ff", 16)).to.equal(255);
  });

  it ("parseFloat for string will return number if the first non-space character is digit", function() {
    expect(parseFloat("2.5Kb")).to.equal(2.5);
  });

  it ("toString will return string", function() {
    expect(3.45423.toString()).to.equal("3.45423");
  });

  it ("toString will return string in the scale of notation", function() {
    expect(200..toString(16)).to.equal("c8");
  });

  it ("toLocaleString will return string with local format", function() {
    expect(1234567890.1234.toLocaleString()).to.equal('1\xa0234\xa0567\xa0890,123');
  });

  it ("toFixed will round the number and return a string", function() {
    expect(3.45423.toFixed(1)).to.equal("3.5");
  });

  it ("Math.floor will return rounded the number", function() {
    expect(Math.floor(3.99)).to.equal(3);
  });

  it ("Math.ceil will return rounded the number", function() {
    expect(Math.ceil(3.45423)).to.equal(4);
  });

  it ("Math.round will return rounded the number", function() {
    expect(Math.round(3.55)).to.equal(4);
  });

  describe ("Trigonometry", function() {
    it ("Math.acos(x)", function() {});
    it ("Math.asin(x)", function() {});
    it ("Math.atan(x)", function() {});
    it ("Math.atan2(y, x)", function() {});
    it ("Math.sin(x)", function() {});
    it ("Math.cos(x)", function() {});
    it ("Math.tan(x)", function() {});
  });
  describe ("Other math functions", function() {
    it ("Math.sqrt(x)", function() {});
    it ("Math.log(x)", function() {});
    it ("Math.pow(x, exp)", function() {});
    it ("Math.abs()", function() {});
    it ("Math.exp()", function() {});
    it ("Math.max()", function() {});
    it ("Math.min()", function() {});
    it ("Math.random()", function() {});
  });
});
