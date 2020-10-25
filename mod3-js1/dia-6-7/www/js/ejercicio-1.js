/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Utiliza reduce para sumar todos los valores del array. Accumulator vale 100.
 * 
*/

'use strict;'

const euros = [29, 41, 46];

const sum = euros.reduce((acc, value) => {
    return acc + value;
}, 100);

console.log(sum);
