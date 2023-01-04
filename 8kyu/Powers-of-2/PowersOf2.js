/* function powersOfTwo(n) {
    const result = [];
    for (let i = 0; i <= n; i++) {
        result.push(2 ** i);
    }
    return result;
} */

function powersOfTwo(n) {
    return Array.from({ length: n + 1 }, (v, i) => 2 ** i);
}