const romanNumeralTranslator = (number) => {
  const numberArray = [9000, 5000, 4000, 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanArray = ['_IX', '_V', '_IV', 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  let romanStr = "";
  for (let j = 0; j < numberArray.length; j++) {
    for (let i = number; i >= numberArray[j]; i-=numberArray[j]) {
      while (number >= numberArray[j]) {
        romanStr += romanArray[j];
        number -= numberArray[j];
      }
    }
  }
  return romanStr;
}

const xCounter = (numberItteration) => {
  const numberRange = [...Array(numberItteration).keys()].map(x => ++x);
  let count = 0;
  const regeXKeeper = /[^X]/g;
  numberRange.forEach(number => {
    let xCount = romanNumeralTranslator(number).replace(regeXKeeper, '').length;
    count = count + xCount
  })
  return count;
}

module.exports = {
  romanNumeralTranslator: romanNumeralTranslator,
  xCounter: xCounter
}