const endsWith = require('../src/EndsWith');

/*
NOTE: This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead. 
*/

test('Check if a string (first argument, str) ends with the given target string (second argument, target)', () => {
  expect(endsWith("Bastian", "n")).toBe(true);
  expect(endsWith("Congratulation", "on")).toBe(true);
  expect(endsWith("Connor", "n")).toBe(false);
  expect(endsWith("Walking on water and developing software from a specification are easy if both are frozen", "specification")).toBe(false);
  expect(endsWith("He has to give me a new name", "name")).toBe(true);
  expect(endsWith("Open sesame", "same")).toBe(true);
})