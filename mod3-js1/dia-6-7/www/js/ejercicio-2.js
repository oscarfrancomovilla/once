/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Devuelve con reduce un array donde los valores sean 3 veces los del array
 * original (x3).
 * 
*/

'use strict;'

const numbers = [7, 14, 5, 2];

const triple = numbers.reduce((acc, value) => {
    acc.push(value * 3);
    return acc;
}, []);

console.log(triple);
