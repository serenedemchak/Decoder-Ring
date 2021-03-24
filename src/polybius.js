// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function getPairs(input){
    input = getEven(input)
  let pairs = []
  for (let i = 0; i < input.length; i+=2){
    pairs.push(input[i] + input[i+1])
    
  }
  return pairs
  }
  function getEven(input){
    let newinput = ""
    for (let i = 0; i < input.length; i++){
      newinput += (input[i])
      if (input[i] === " "){newinput += " "
      }
    }
    return newinput
  }
  function noSpaces(input){
    let newinput = ""
    for (let i = 0; i < input.length; i++){
      if (input[i] !== " "){
      newinput += (input[i])
      }
    }
    return newinput
  }

  function polybius(input, encode = true) {
   
    const alphabet = [
      {letter: "a", code: "11"},
      {letter: "b", code: "21"},
      {letter: "c", code: "31"},
      {letter: "d", code: "41"},
      {letter: "e", code: "51"},
      {letter: "f", code: "12"},
      {letter: "g", code: "22"},
      {letter: "h", code: "32"},
      {letter: "i", code: "42"},
      {letter: "j", code: "42"},
      {letter: "k", code: "52"},
      {letter: "l", code: "13"},
      {letter: "m", code: "23"},
      {letter: "n", code: "33"},
      {letter: "o", code: "43"},
      {letter: "p", code: "53"},
      {letter: "q", code: "14"},
      {letter: "r", code: "24"},
      {letter: "s", code: "34"},
      {letter: "t", code: "44"},
      {letter: "u", code: "54"},
      {letter: "v", code: "15"},
      {letter: "w", code: "25"},
      {letter: "x", code: "35"},
      {letter: "y", code: "45"},
      {letter: "z", code: "55"},
      {letter: " ", code: " "},
      ]
   
      const alphabet2 = [
      {letter: "a", code: "11"},
      {letter: "b", code: "21"},
      {letter: "c", code: "31"},
      {letter: "d", code: "41"},
      {letter: "e", code: "51"},
      {letter: "f", code: "12"},
      {letter: "g", code: "22"},
      {letter: "h", code: "32"},
      {letter: "(i/j)", code: "42"},
      {letter: "k", code: "52"},
      {letter: "l", code: "13"},
      {letter: "m", code: "23"},
      {letter: "n", code: "33"},
      {letter: "o", code: "43"},
      {letter: "p", code: "53"},
      {letter: "q", code: "14"},
      {letter: "r", code: "24"},
      {letter: "s", code: "34"},
      {letter: "t", code: "44"},
      {letter: "u", code: "54"},
      {letter: "v", code: "15"},
      {letter: "w", code: "25"},
      {letter: "x", code: "35"},
      {letter: "y", code: "45"},
      {letter: "z", code: "55"},
      {letter: " ", code: " "},
      {letter: " ", code: "  "}
      ]
       // variable for end result
      let output = ""
      if (encode === true){
      // Access each letter in input string
      for (let i = 0; i < input.length; i++){
        // match alphabet letter to input lette
       let character = input[i].toLowerCase()
        for (let alph = 0; alph < alphabet.length; alph++)
        if (character === alphabet[alph].letter) {
       // make new variable that represents each case ignoring uppercase
       const encodedLetter = alphabet[alph].code;
         output += encodedLetter;
         }
       }
      }
   
      if (encode === false){
        let isItEven = noSpaces(input)
        if(isItEven.length % 2 !== 0){
          return false
        }
        let pairs = getPairs(input)
      // Access each letter in input string
      for (let i = 0; i < pairs.length; i++){
        // match alphabet letter to input lette
       let numberPair = pairs[i]
        for (let alph = 0; alph < alphabet2.length; alph++)
        if (numberPair === alphabet2[alph].code) {
       // make new variable that represents each case ignoring uppercase
       const encodedLetter = alphabet2[alph].letter;
         output += encodedLetter;
         }
       }
      }
     
   return output
    
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
