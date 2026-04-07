// A capitalize function that takes a string and returns it with the first character capitalized.
function capitalize(str) {
  // Remove any trailing whitespace
  str = str.trim();
  // Isolate noLetterStrings at the start
  const nonLetterStrings = nonLetterStringsAtStart(str);
  // Isolate the first letter string
  const firstLetterString = str[firstLetterStringIndex(str)];
  // Capitalize it
  const firstLetterCapitalized = firstLetterString.toUpperCase();
  // Isolate the rest of the letters after the first letter
  const theRestOfTheStr = str.slice(firstLetterStringIndex(str) + 1);
  // Join all arrays
  return [nonLetterStrings, firstLetterCapitalized, theRestOfTheStr].join("");
}
export { capitalize };

function firstLetterStringIndex(str) {
  for (let i = 0; i < str.length; i++) {
    // if charAr(i) is a letter
    // Return the letter
    if (str.charAt(i).match(/[A-Za-z]/)) {
      return i;
    }
  }
}
function nonLetterStringsAtStart(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (!str.charAt(i).match(/[A-Za-z]/)) {
      arr.push(str[i]);
    }
    if (str.charAt(i).match(/[A-Za-z]/)) {
      return arr;
    }
  }
}
