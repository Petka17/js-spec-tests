'use strinct'

var expect = chai.expect;
var v;

describe ("Simple Operators", function() {
  describe ("binary plus operator", function() {
    it ("add numbers [1 + 2 = 3]", function() {
      expect(1 + 2).to.equal(3);
    });

    it ("concatinate string [\"qq\" + \"ww\" = \"qqww\"]", function() {
      expect("qq" + "ww").to.equal("qqww");
    });

    it ("convert everything into string and concatinate them [\"qq\" + 1 + true = \"qq1true\"]", function() {
      expect("qq" + 1 + true).to.equal("qq1true");
    });

    it ("convert everything into string and concatinate them (order doesn't matter) [1 + \"qq\" = \"1qq\"]", function() {
      expect(1 + "qq").to.equal("1qq");
    });
  });

  describe ("binary minus, multiplacation, division", function() {
    it ("try to convert all operands to number [1 - \"2\" = -1]", function() {
      expect(1 - "2").to.equal(-1);
    });
  });

  describe ("unary plus operator", function() {
    it ("tries to converts operand to number", function() {
      expect(+"2").to.equal(2);
    });

    it ("converts true to 1", function() {
      expect(+true).to.equal(1);
    });

    it ("converts false to 0", function() {
      expect(+false).to.equal(0);
    });
  });

  describe ("equal operator", function() {
    it ("returns value [v = 1 + 2 => 3]", function() {
      expect(v = 1 + 2).to.equal(3);
    });
  });

  describe ("persantage operator [%]", function() {
    it ("returns module [5 % 3 = 2]", function() {
      expect(5 % 3).to.equal(2);
    });
  });

  describe ("increment operator", function() {
    it ("before variable increments by 1 and returns new value [v = 0; ++v => 1]", function() {
        v = 0;
        expect(++v).to.equal(1);
    });

    it ("before variable increments by 1 and returns old value [v = 0; v++ => 0]", function() {
        v = 0;
        expect(v++).to.equal(0);
    });

    it ("increments string which can be converted to number", function() {
        v = "0";
        expect(++v).to.equal(1);
    });

    it ("increments false to 1", function() {
        v = false;
        expect(++v).to.equal(1);
    });

    it ("increments true to 2", function() {
        v = true;
        expect(++v).to.equal(2);
    });

    it ("couldn't apply to constant [5++ error]", function() {
      v = "";

      try {
        eval("5++;");
      } catch (e) {
        v = e;
      }
      expect(v.toString()).to.equal("ReferenceError: Invalid left-hand side expression in postfix operation");
    });
  });

  describe ("logical operators", function() {
    it ("ordering string with number: if it is possible to convert string to number, then compare numbers", function() {
      expect("13" > 2).to.equal(true);
    });

    it ("ordering string with number: if it isn't possible to convert string to number, then compare strings", function() {
      expect("13z" > 2).to.equal(false);
    });

    it ("comparison string with number: if it is possible to convert string to number, then compare numbers", function() {
      expect("2" == 2).to.equal(true);
    });

    it ("strict comparison string with number always returns false", function() {
      expect("2" === 2).to.equal(false);
    });

    it ("null is equal to undefined", function() {
      expect(null == undefined).to.equal(true);
    });
  });
});
