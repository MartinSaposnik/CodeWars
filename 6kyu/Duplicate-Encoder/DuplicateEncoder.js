function duplicateEncode(word){

    let returnString = "";
    const charMap = {};

    //Recorrer el string original
    Array.from(word).forEach(char => { 
    //Lleva la cuenta de cada uno de los caracteres.
        if(!charMap[char]){
            charMap[char] = {
                count: 1,
            }
        }else {
            charMap[char].count++;
        }
    })
    //console.log(charMap);


    //Si el caracter aparece una vez, devolver "("
    //Si el caracter aparece mas de una vez, devolver ")"
    for (let i = 0; i<word.length; i++){
        let char = word[i].toLowerCase();
        returnString += charMap[char].count > 1 ? ')' : '(';
    }

    //Retornar la nueva String
    return returnString;
}

console.log(duplicateEncode('Roberto'));