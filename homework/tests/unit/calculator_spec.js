var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('add 1 to 4 and get 5', function() {
    calculator.previousTotal = 1;
    calculator.add(4)
    const actual = calculator.runningTotal;
    assert.equal(actual, 5)
  })

  it('subtract 4 from 7 and get 3', function() {
    calculator.previousTotal = 7;
    calculator.subtract(4)
    const actual = calculator.runningTotal;
    assert.equal(actual, 3)
  })

  it('multiply 3 by 5 and get 15', function() {
    calculator.previousTotal = 3;
    calculator.multiply(5)
    const actual = calculator.runningTotal;
    assert.equal(actual, 15)
  })

  it('divide 21 by 7 and get 3', function() {
    calculator.previousTotal = 21;
    calculator.divide(7)
    const actual = calculator.runningTotal;
    assert.equal(actual, 3)
  })

  it('concatenate multiple number button clicks', function() {
    calculator.runningTotal = 0;
    calculator.numberClick(9);
    calculator.numberClick(8);
    calculator.numberClick(7);
    const actual = calculator.runningTotal;
    assert.equal(actual, 987)
  })

  it('chain multiple operations together', function() {
    calculator.previousTotal = 8;
    calculator.previousOperator = '+';
    calculator.operatorClick('+');
    const actual = calculator.runningTotal;
    assert.equal(actual, 8)
  })

  it('clear the running total without affecting the calculation', function() {
    calculator.previousTotal = 10;
    calculator.previousOperator = '-';
    calculator.clearClick();
    const actual = calculator.runningTotal;
    assert.equal(actual, 0)
  })
});
