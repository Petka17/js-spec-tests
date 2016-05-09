'use strinct'

var expect = chai.expect;
var v;

describe ("Datetime", function() {
  it ("create new datetime object using Date class [pass miliseconds]", function() {
    expect(new Date(100)).to.be.an.instanceof(Date);
    expect(new Date(0).toLocaleString()).to.equal("01.01.1970, 3:00:00");
  });

  it ("create new datetime object using Date class [pass year (4-digits), month (starting from 0), date, hours (default 0), minutes (default 0), seconds (default 0)]", function() {
    expect(new Date(2000, 1, 1).toLocaleString()).to.equal("01.02.2000, 0:00:00");
  });

  it ("create new datetime object using Date class [pass string]", function() {
    expect(new Date("01.01.2000 01:10:55").toLocaleString()).to.equal("01.01.2000, 1:10:55");
  });

  it ("Date.parse will return number of milliseconds since 1/1/1970 for ISO formatted string", function() {
    var d = Date.parse("2000-01-01T12:30:15.000+03:00");
    expect(new Date(d).toLocaleString()).to.equal("01.01.2000, 12:30:15");
  });

  it ("toLocaleString method will return formatted string with date", function() {
    expect(
      new Date("01.01.2000 01:10:55")
        .toLocaleString(
          "ru",
          {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            timezone: 'Europe/Moscow'
          }
        )
    ).to.equal("1 января 2000 г.");
  });

  it ("getFullYear [getUTCFullYear] method will return 4-digit year", function() {
    expect(new Date(2000, 1, 1).getFullYear()).to.equal(2000);
    expect(new Date(2000, 1, 1).getUTCFullYear()).to.equal(2000);
  });

  it ("getMonth [getUTCMonth] method will return month number starting from 0", function() {
    expect(new Date(2000, 0, 1).getMonth()).to.equal(0);
    expect(new Date(2000, 0, 2).getUTCMonth()).to.equal(0);
  });

  it ("getDate [getUTCDate] method will return day number", function() {
    expect(new Date(2000, 0, 1).getDate()).to.equal(1);
    expect(new Date(2000, 0, 2).getUTCDate()).to.equal(1);
  });

  it ("getHours [getUTCHours] method will return hours", function() {
    expect(new Date(2000, 0, 1).getHours()).to.equal(0);
    expect(new Date(2000, 0, 1).getUTCHours()).to.equal(21);
  });

  it ("getMinutes [getUTCMinutes] method will return minutes", function() {
    expect(new Date(2000, 0, 1).getMinutes()).to.equal(0);
    expect(new Date(2000, 0, 1).getUTCMinutes()).to.equal(0);
  });

  it ("getSeconds [getUTCSeconds] method will return seconds", function() {
    expect(new Date(2000, 0, 1).getSeconds()).to.equal(0);
    expect(new Date(2000, 0, 1).getUTCSeconds()).to.equal(0);
  });

  it ("getMilliseconds [getUTCMilliseconds] method will return milliseconds", function() {
    expect(new Date(2000, 0, 1).getMilliseconds()).to.equal(0);
    expect(new Date(2000, 0, 1).getUTCMilliseconds()).to.equal(0);
  });

  it ("getDay [getUTCDay] method will return day of the week number (0 - Sunday, 6 - Saturday)", function() {
    expect(new Date(2016, 4, 8).getDay()).to.equal(0);
    expect(new Date(2016, 4, 8).getUTCDay()).to.equal(6);
  });

  it ("getTime method will return number of millisecond since 1/1/1970", function() {
    expect(new Date(2000, 0, 1).getTime()).to.equal(946674000000);
  });

  it ("getTimezoneOffset method will return current timezone offset from UTC", function() {
    expect(new Date(2000, 0, 1).getTimezoneOffset()).to.equal(-180);
  });

  it ("setFullYear [setUTCFullYear] method will change yeay for the date", function() {
    var d = new Date();
    d.setFullYear(2000);
    expect(d.getFullYear()).to.equal(2000);
    d.setUTCFullYear(2000);
    expect(d.getUTCFullYear()).to.equal(2000);
  });

  it ("setMonth [setUTCMonth] method will change month for the date", function() {
    var d = new Date();
    d.setMonth(1);
    expect(d.getMonth()).to.equal(1);
    d.setUTCMonth(1);
    expect(d.getUTCMonth()).to.equal(1);
  });

  it ("setDate [setUTCDate] method will change date day for the date", function() {
    var d = new Date();
    d.setDate(1);
    expect(d.getDate()).to.equal(1);
    d.setUTCDate(1);
    expect(d.getUTCDate()).to.equal(1);
  });

  it ("setHours [setUTCHours] method will change hours for the date", function() {
    var d = new Date();
    d.setHours(1);
    expect(d.getHours()).to.equal(1);
    d.setUTCHours(1);
    expect(d.getUTCHours()).to.equal(1);
  });

  it ("setMinutes [setUTCMinutes] method will change minutes for the date", function() {
    var d = new Date();
    d.setMinutes(1);
    expect(d.getMinutes()).to.equal(1);
    d.setUTCMinutes(1);
    expect(d.getUTCMinutes()).to.equal(1);
  });

  it ("setSeconds [setUTCSeconds] method will change seconds for the date", function() {
    var d = new Date();
    d.setSeconds(1);
    expect(d.getSeconds()).to.equal(1);
    d.setUTCSeconds(1);
    expect(d.getUTCSeconds()).to.equal(1);
  });

  it ("setMilliseconds [setUTCMilliseconds] method will change milliseconds for the date", function() {
    var d = new Date();
    d.setMilliseconds(1);
    expect(d.getMilliseconds()).to.equal(1);
    d.setUTCMilliseconds(1);
    expect(d.getUTCMilliseconds()).to.equal(1);
  });

  it ("setTime method will change number of millisecond since 1/1/1970 for the date", function() {
    var d = new Date();
    d.setTime(1);
    expect(d.getTime()).to.equal(1);
  });
});
