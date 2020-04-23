const firstLetterCap = require('../src/FirstLetterCap');

test('Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lowercase', () => {
  expect(firstLetterCap("I'm a little tea pot")).toBe("I'm A Little Tea Pot");
  expect(firstLetterCap("sHoRt AnD sToUt")).toBe("Short And Stout");
  expect(firstLetterCap("HERE IS MY HANDLE HERE IS MY SPOUT")).toBe("Here Is My Handle Here Is My Spout");
});