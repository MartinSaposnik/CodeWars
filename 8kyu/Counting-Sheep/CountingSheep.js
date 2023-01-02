/* function countSheeps(arrayOfSheep) {
    let contador = 0;

    for (let sheep of arrayOfSheep) {
        if (sheep === true) {
            contador++;
        }
    }
    return contador
} */

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(contador => contador === true).length;
}