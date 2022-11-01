function highAndLow(numbers){
    const nums = numbers.split(' ').map(n => Number(n));
    const max = Math.max(...nums);
    const min = Math.min(...nums);

    return `${max} ${min}`
}

/* function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
} */

/* function highAndLow(numbers){
    const nums = numbers.split(' ').map(Number);
    const [max, min] = [Math.max(...nums), Math.min(...nums)];
    return [max, min].join(' ')
} */
