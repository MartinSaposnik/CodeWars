/* function yearDays(year) {
    let nDays = year % 4 ? 365 :
        year % 100 ? 366 :
            year % 400 ? 365 : 366;

    return `${year} has ${nDays} days`;
}

function yearDays(year) {
    return year + ' has ' + (!(year % 100) && year % 400 || year % 4 ? '365' : '366') + ' days';
}
 */
function yearDays(year) {
    // Verificar si el año es divisible por 4
    if (year % 4 === 0) {
        // Si es divisible por 4, verificar si es un año de siglo
        if (year % 100 === 0) {
            // Si es un año de siglo, verificar si es divisible por 400
            if (year % 400 === 0) {
                // Si es divisible por 400, es un año bisiesto
                return `${year} has 366 days`;
            } else {
                // Si no es divisible por 400, no es un año bisiesto
                return `${year} has 365 days`;
            }
        } else {
            // Si no es un año de siglo, es un año bisiesto
            return `${year} has 366 days`;
        }
    } else {
        // Si no es divisible por 4, no es un año bisiesto
        return `${year} has 365 days`;
    }
}