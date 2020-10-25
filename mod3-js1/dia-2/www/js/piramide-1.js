/* ################
 * ## Pirámide 1 ##
 * ################
 *
 * Utiliza el bucle "for" para crear las siguiente figura con asteriscos (*). Debe existir una
 * variable que permita modificar la altura de la pirámide. Para el ejemplo expuesto a 
 * continuación se ha tomado como referencia una altura de 4: 
 * 
 * - Figura 1:
 * 
 *      *
 *      **
 *      ***
 *      ****
*/

'use strict';

// Introducimos la altura.
const height = 4;

// Variable que almacena los símbolos de cada línea.
let floor = '';

// Bucle "for".
for(let i = 0; i < height; i++) {
    floor += '*';
    console.log(floor);
} 

