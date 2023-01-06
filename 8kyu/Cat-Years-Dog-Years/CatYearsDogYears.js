var humanYearsCatYearsDogYears = function (humanYears) {
    const catYears =
        humanYears === 1
            ? 15
            : humanYears === 2
                ? 24
                : 24 + (humanYears - 2) * 4;
    const dogYears =
        humanYears === 1
            ? 15
            : humanYears === 2
                ? 24
                : 24 + (humanYears - 2) * 5;

    return [humanYears, catYears, dogYears];
}

/* var humanYearsCatYearsDogYears = function(y) {
    if (y == 1) return [1, 15, 15]
    if (y == 2) return [2, 24, 24]
    return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
} */