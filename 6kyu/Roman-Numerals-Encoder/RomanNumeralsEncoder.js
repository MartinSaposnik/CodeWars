function toRoman(number) {
    // Create an array of Roman numeral symbols
    const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    // Create an array of corresponding values
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    let roman = '';
    let i = 0;
    while (number > 0) {
        if (number >= values[i]) {
            roman += symbols[i];
            number -= values[i];
        } else {
            i++;
        }
    }

    return roman;
}