var cubeChecker = function (volume, side) {
    if (volume <= 0 || side <= 0) {
        return false;
    }

    let ladoCalculado = Math.round(Math.pow(volume, 1 / 3));

    return ladoCalculado === side;
};