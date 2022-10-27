function solution(str) {
    let i = 0;
    let result = [];

    if (str.length % 2 !== 0) {
        str += '_'
    }
    while (i < str.length) {
        result.push(str[i] + str[i + 1])
        i += 2
    }
    return result;
}

/* function solution(str) {
    arr = [];
    for (var i = 0; i < str.length; i += 2) {
        second = str[i + 1] || '_';
        arr.push(str[i] + second);
    }
    return arr;
} */