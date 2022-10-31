function numberToPower(number, power) {
    if (power === 0) {
        return 1
    }

    let buffer = number;

    for (let i = power; i > 1; i--) {
        buffer *= number
    }
    return buffer
}

/* function numberToPower(number, power){
    if (power === 0) return 1;
    return number * numberToPower(number, power - 1)
  } */