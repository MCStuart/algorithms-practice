const {xCounter} = require('../src/HowManyXs');

expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () =>
        `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
        `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },
});

test("Count how many occurances of 'X'(10) there are in the range of Roman Numerals [1,1000)", () => {
  expect(xCounter(9999)).toBeWithinRange(15000, 17000);
  expect(xCounter(9)).toBe(1);
  expect(xCounter(10)).toBe(2);
  expect(xCounter(15)).toBe(7);
  expect(xCounter(100)).toBe(150);
})