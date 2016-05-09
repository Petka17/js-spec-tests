'use strinct'

var expect = chai.expect;
var v = [10, 49, 319, 408, 630, 726, 861, 962, 1024, 1131, 1364];

describe ("Content", function() {
  it ("Введение: " + (100 * v[1]/v[10]).toFixed(), function() {});
  it ("Основы JavaScript: " + (100 * v[2]/v[10]).toFixed(), function() {});
  it ("Качество кода: " + (100 * v[3]/v[10]).toFixed(), function() {});
  it ("Структуры данных: " + (100 * v[4]/v[10]).toFixed(), function() {});
  it ("Замыкания, область видимости: " + (100 * v[5]/v[10]).toFixed(), function() {});
  it ("Методы объектов и контекст вызова: " + (100 * v[6]/v[10]).toFixed(), function() {});
  it ("Некоторые другие возможности: " + (100 * v[7]/v[10]).toFixed(), function() {});
  it ("ООП в функциональном стиле: " + (100 * v[8]/v[10]).toFixed(), function() {});
  it ("ООП в прототипном стиле: " + (100 * v[9]/v[10]).toFixed(), function() {});
  it ("Современные возможности ES-2015: " + (100 * v[10]/v[10]).toFixed(), function() {});
});
