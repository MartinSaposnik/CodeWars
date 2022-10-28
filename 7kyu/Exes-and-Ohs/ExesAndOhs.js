function XO(str) {
    //code here
    let exes = 0;
    let ohs = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x' || str[i] === 'X') {
            exes++;
        } else if (str[i] === 'o' || str[i] === 'O') {
            ohs++
        }
    }
    return exes === ohs;
}

/* const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
} */