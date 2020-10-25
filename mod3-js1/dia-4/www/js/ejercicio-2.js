/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Dados el siguiente array: [true, false, false, false, true, false, false, false, true]
 * 
 *  - Los valores positivos son infectados.
 * 
 *  - Los infectados transmiten su enfermedad a los no infectados que tienen a los lados.
 * 
 * En este caso el resultado debería ser: [true, true, false, true, true, true, false, true, true];
 * 
*/

'use strict;'

const infected = [true, false, false, false, true, false, false, false, true];

function apocalipsis(infectedArr) {

    // Creo una copia del array que paso como parámetro.
    const copyArr = [...infectedArr];

    // Recorro el array que paso como parámetro.
    for (let i = 0; i < infectedArr.length; i++) {

        if (infectedArr[i]) {
            // Compruebo que no estoy en la primera posición del array.
            if (i > 0) {
                // Modifico la copia, no el original.
                copyArr[i - 1] = true;
            }

            // Compruebo que no estoy en la última posición del array.
            if (i < infectedArr.length - 1) {
                // Modifico la copia, no el original.
                copyArr[i + 1] = true;
            }
        }

    }

    // Devuelvo la copia del array modificada.
    return copyArr;
}

// Llamamos a la función y mostramos el resultado por consola.
console.log(apocalipsis(infected));
