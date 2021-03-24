// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
   
    if (!shift || shift === 0 || shift < -25 || shift > 25){
      return false
    }

    if (encode === false){
      shift = -shift
          }

const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Encoded Text
let encodedText = "";

// Shift (Over 26 Characters)
if (shift < 0) {
  // Remainder
  shift += 26;
}

const input1 = input.toLowerCase()
for (let i = 0; i < input1.length; i++) {
  let character = input1[i]
  if (alphabet.indexOf(character) !== -1) {
    // Find Alphabet Index.
    const alphabetIndex = alphabet.indexOf(character);
let newIndex = (alphabetIndex + shift) % 26
encodedText += alphabet[newIndex]
  }
  // Special Characters
  else {
    // Add To String
    encodedText += input[i];

  }
}

return encodedText;
};

  return {
    caesar
  };
})();

module.exports = caesarModule.caesar;
