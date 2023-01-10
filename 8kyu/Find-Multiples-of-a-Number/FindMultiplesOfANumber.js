function findMultiples(integer, limit) {
    const multiples = [];
    for (let i = integer; i <= limit; i += integer) {
        multiples.push(i);
    }
    return multiples;
}

/* function findMultiples(int, limit) {
    return Array(Math.floor(limit / int)).fill(1).map((x, i) => int * (i + 1));
} */