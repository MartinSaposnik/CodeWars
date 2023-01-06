// Inicializar la suma en 0
let sum = 0;

// Recorrer la matriz y agregar solo los elementos numéricos a la suma
for (const element of arr) {
    if (typeof element === 'number') {
        sum += element;
    }
}

// Devolver el equivalente binario de la suma
return sum.toString(2);