const vowel = ['a', 'e', 'i', 'o', 'u'];

function getCount(str) {
    let count = 0;

    for(let j = 0; j < str.length; j++){
        if(vocales.includes(str[j])){
            count++
        }
    }
    return 0;
}

/* function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
} */

/* function getCount(str) {
    return str.split('').filter(c => "aeiou".includes(c)).length;
} */

/* function getCount(str) {
    var vowelsCount = 0;
    str.split("").forEach(function (x) {
        if (x == "a" | x == "e" | x == "i" | x == "o" | x == "u") {
            vowelsCount += 1;
        }
    });
    return vowelsCount;
} */

/* function getCount(str) {
    var vowelsCount = 0;
    for (index in str) {
        switch (str[index]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                vowelsCount++;
                break;
        }
    }
    return vowelsCount;
} */