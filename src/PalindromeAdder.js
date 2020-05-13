const clean = (str) => str.toLowerCase().replace(/[^0-9]/g, '');

const isPalindrome = (inputStr) => {
  const cleanStr = clean(inputStr);
  if (cleanStr === '') {
    return 0;
  }
  const reverseStr = cleanStr.split('').reverse().join('');
  if (reverseStr === cleanStr) {
    let strToNumber = parseInt(cleanStr);
    return strToNumber;
  } else {
    return 0;
  }
}

const palindromeCounter = () => {
  let count = 0;
  for (let i=1; i<10000; i++) {
    let iStr = i.toString()
    count = count + isPalindrome(iStr)
  }
  console.log(count)
  return count;
}

module.exports = {
  clean: clean, 
  isPalindrome: isPalindrome, 
  palindromeCounter: palindromeCounter
};

