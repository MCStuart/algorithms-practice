const {palindromeCounter} = require('../src/PalindromeAdder');

test('Evaluates and adds all numerical palindromes in the range [1, 10000)', () => {
  expect(palindromeCounter()).toBe(545040);
});