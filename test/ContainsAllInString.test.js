const containsAllInString = require('../src/ContainsAllInString');

test('Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array', () => {
  expect(containsAllInString(["hello", "Hello"])).toBe(true);
})