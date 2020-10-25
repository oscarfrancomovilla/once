/* #################
 * ## Ejercicio 3 ##
 * #################
 * 
 * Devuelve con reduce un nuevo array donde se filtran los valores superiores a 30.
 * 
*/

'use strict;'

const euro = [29, 41, 46, 11, 34, 0];

const over30 = euro.reduce((acc, value) => {
    if (value > 30) {
        acc.push(value);
    }
    return acc;
}, []);

console.log(over30);