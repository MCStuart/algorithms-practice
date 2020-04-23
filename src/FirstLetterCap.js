const firstLetterCap = (sentence) => {
  let allLowerCaseLetters = sentence.toLowerCase();
  // let onlyAlphaChars = allLowerCaseLetters.replace(/[^a-zA-Z]/g, '');
  let sentenceArray = allLowerCaseLetters.split(' ');
  let capitalizedChars = [];
  for (let i=0; i<sentenceArray.length; i++) {
    capitalizedChars.push(sentenceArray[i].charAt(0).toUpperCase() + sentenceArray[i].slice(1));
  }
  let recombinedSentence = capitalizedChars.join(' ');
  return recombinedSentence;
}

module.exports = firstLetterCap;