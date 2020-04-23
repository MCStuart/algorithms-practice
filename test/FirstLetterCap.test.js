const firstLetterCap = require('../src/FirstLetterCap');

test('Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lowercase', () => {
  expect(firstLetterCap("I'm a little tea pot")).toBe("I'm A Little Tea Pot");
})


// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lowercase.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

// titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
// titleCase("sHoRt AnD sToUt") should return Short And Stout.
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout.