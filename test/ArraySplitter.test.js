const arraySplitter = require('../src/ArraySplitter');

test('splits an array (first argument) into groups the length of the second argument and returns them as a two-dimensional array', () => {
  expect(arraySplitter([["a", "b", "c", "d"], 2])).toMatchObject([["a", "b"], ["c", "d"]]);
  expect(arraySplitter([[0, 1, 2, 3, 4, 5], 3])).toMatchObject([[0, 1, 2], [3, 4, 5]]);
  expect(arraySplitter([[0, 1, 2, 3, 4, 5], 2])).toMatchObject([[0, 1], [2, 3], [4, 5]]);
  expect(arraySplitter([[0, 1, 2, 3, 4, 5], 4])).toMatchObject([[0, 1, 2, 3], [4, 5]]);
  expect(arraySplitter([[0, 1, 2, 3, 4, 5, 6], 3])).toMatchObject([[0, 1, 2], [3, 4, 5], [6]]);
})