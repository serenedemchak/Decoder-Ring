// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  
function alphabetmap(alphabet){
  map = [
    
    {letter:"a", code: alphabet[0]},
    {letter:"b", code: alphabet[1]},
    {letter:"c", code: alphabet[2]},
    {letter:"d", code: alphabet[3]},
    {letter:"e", code: alphabet[4]},
    {letter:"f", code: alphabet[5]},
    {letter:"g", code: alphabet[6]},
    {letter:"h", code: alphabet[7]},
    {letter:"i", code: alphabet[8]},
    {letter:"j", code: alphabet[9]},
    {letter:"k", code: alphabet[10]},
    {letter:"l", code: alphabet[11]},
    {letter:"m", code: alphabet[12]},
    {letter:"n", code: alphabet[13]},
    {letter:"o", code: alphabet[14]},
    {letter:"p", code: alphabet[15]},
    {letter:"q", code: alphabet[16]},
    {letter:"r", code: alphabet[17]},
    {letter:"s", code: alphabet[18]},
    {letter:"t", code: alphabet[19]},
    {letter:"u", code: alphabet[20]},
    {letter:"v", code: alphabet[21]},
    {letter:"w", code: alphabet[22]},
    {letter:"x", code: alphabet[23]},
    {letter:"y", code: alphabet[24]},
    {letter:"z", code: alphabet[25]},
    {letter:" ", code: " "},
  
  ]
  return map
}

  function substitution(input, alphabet, encode = true) {
    if(!alphabet){
      return false
    }
  
    if (alphabet.length !== 26){
      return false
    }
  
    let result = {}
    for (let i = 0; i < alphabet.length; i++){
      if (result[alphabet[i]] != null){
        result[alphabet[i]] = 1
        return false
      }
      else {
        result[alphabet[i]] = 0
      }
    
    }
  
    if (encode === true){
    let output = ""
    let map = alphabetmap(alphabet)
    for (let i = 0; i < input.length; i++){
      let character = input[i].toLowerCase()
      for (let alph = 0; alph < map.length; alph++){
        if (character === map[alph].letter){
          output += map[alph].code
        }
      }
    }
    
    return output
    }
  
    if (encode === false){
    let output = ""
    let map = alphabetmap(alphabet)
    for (let i = 0; i < input.length; i++){
      let character = input[i].toLowerCase()
      for (let alph = 0; alph < map.length; alph++){
        if (character === map[alph].code){
          output += map[alph].letter
        }
      }
    }
    
    return output
    }
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
