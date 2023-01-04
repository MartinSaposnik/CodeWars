/* function removeExclamationMarks(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '!') {
            newStr += str[i];
        }
    }
    return newStr;
} */

function removeExclamationMarks(str) {
    return str.replace(/!/g, '');
}