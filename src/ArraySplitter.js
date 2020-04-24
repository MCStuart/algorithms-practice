const arraySplitter = (arrayToSplitDefinition) => {
  let arrayToSplit = arrayToSplitDefinition[0];
  let definedLengthOfNewArrayChunks = arrayToSplitDefinition[1];
  let twoDimensionalArray = [];
  while (arrayToSplit.length > 0) {
    twoDimensionalArray.push(arrayToSplit.slice(0, definedLengthOfNewArrayChunks));
    arrayToSplit.splice(0, definedLengthOfNewArrayChunks);
  };
  return twoDimensionalArray;
};
module.exports = arraySplitter;