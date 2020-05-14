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
  expect(xCounter()).toBeWithinRange(1000, 2000);
})