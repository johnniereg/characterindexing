// Lower case and return an array of characters
function makeStringLowCaseArray(input) {
  var lowerCase = input.toLowerCase().split("");
  return lowerCase;
}

function indexChar(inputString) {
  var input = makeStringLowCaseArray(inputString);
  var indexedChar = {};
    for (var i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        continue;
      }
      else if (indexedChar[input[i]] === undefined) {
        indexedChar[input[i]] = [i];
      }
      else
        indexedChar[input[i]].push(i);
  }
  return indexedChar;
}

console.log(indexChar("lighthouse in the house"));