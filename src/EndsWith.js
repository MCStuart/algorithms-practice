const endsWith = (str, target) => {
  let charactersFromEnd = str.length - target.length;
  let EndCharArray = str.substring(charactersFromEnd);
  if (EndCharArray == target) {
    return true
  }
  return false
}

module.exports = endsWith;