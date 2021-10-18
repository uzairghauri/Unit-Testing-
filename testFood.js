const assert = require('assert');
const rooster = require('./food');
describe('Food', () => {
  describe('.announceBreakfast', () => {
  it('returns a breakfast call', () => {
    const expected = 'Time for Breakfast';

    const actual = Food.announceBreakfast();

    assert.equal(actual, expected);
});
});
describe('.breakfastTime', () => {
  it('return its argument as a string', () => {

    const inputNumber = 6;
    const expected = '6';

    const actual = food.breakfastTime(inputNumber);

    assert.equal(actual, expected);
  });
  it('throws a range error if passed a number less than 0', () => {
    const inputNumber = -1;
    const expected = RangeError;

    assert.throws(() => {
      Food.breakfastTime(inputNumber); }, expected);
  })
});
it('throws an error if passed a number greater than 12', () => {
  const inputNumber = 13;
  const expected = RangeError;

  assert.throws(() => {
    Rooster.timeAtDawn(inputNumber); }, expected);
  });
});

