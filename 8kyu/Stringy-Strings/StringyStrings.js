function stringy(size) {
    let result = '';
    for (let i = 1; i <= size; i++) {
        result += i % 2 === 1 ? '1' : '0';
    }
    return result;
}

