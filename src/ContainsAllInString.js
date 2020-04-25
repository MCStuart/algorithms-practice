const containsAllInString = (array) => {
  let firstString = array[0].toLowerCase();
  let isContained = array[1].toLowerCase();
  let firstStringToArray = firstString.split('');
  let isContainedInArray = isContained.split('');
  for (let i = 0; i < isContainedInArray.length; i++) {
    if (firstStringToArray.includes(isContainedInArray[i]) != true) {
      return false;
    };
  };
  return true;
};
module.exports = containsAllInString;