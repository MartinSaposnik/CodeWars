function shortcut (string) {
    return string
        .split('')
        .filter(str => !'aeiou'.includes(str))
        .join('')
  }

/* function shortcut(string){
    return string.replace(/[aeiou]/g,'')
  } */

function shortcut (string){
    let result = '';
    for(let i = 0; i<string.length; i++){
        if( string[i] != 'a' &&
            string[i] != 'e' &&
            string[i] != 'i' &&
            string[i] != 'o' &&
            string[i] != 'u'){
                result += string[i]
            }
    }
    return result
}