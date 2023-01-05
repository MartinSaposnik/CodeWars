/* function multiplicarMatriz(x) {
    let resultado = 1;
    for (let n of x) {
      resultado *= n;
    }
    return resultado;
} */

function multiplicarMatriz(x) {
    return x.length ? x.reduce((a, b) => a * b) : 0;
}