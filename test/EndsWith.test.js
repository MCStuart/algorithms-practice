const endsWith = require('../src/EndsWith');

/*
NOTE: This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead. 
*/

test('Check if a string (first argument, str) ends with the given target string (second argument, target)', () => {
  expect(endsWith("Bastian", "n")).toBe(true);
})

// Check if a string (first argument, str) ends with the given target string (second argument, target)
// NOTE: This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
// confirmEnding("Bastian", "n") should return true.
// confirmEnding("Congratulation", "on") should return true.
// confirmEnding("Connor", "n") should return false.
// confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
// confirmEnding("He has to give me a new name", "name") should return true.
// confirmEnding("Open sesame", "same") should return true.