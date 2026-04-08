export function caesarCipher(str, key) {
  let alphaLower = [..."abcdefghijklmnopqrstuvwxyz"];
  let alphaUpper = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  let ciphered = [];
  // Loop over str
  str.split("").forEach((char) => {
    // For each char in str, get the index of str in alpha
    // Then add the shift factor (key) to it then calculate the modulo of the value against 26
    // Push that char to the ciphered array
    if (alphaLower.includes(char)) {
      ciphered.push(alphaLower[(alphaLower.indexOf(char) + key) % 26]);
    } else if (alphaUpper.includes(char)) {
      ciphered.push(alphaUpper[(alphaUpper.indexOf(char) + key) % 26]);
    } else {
      ciphered.push(char);
    }
  });
  return ciphered.join("");
}
