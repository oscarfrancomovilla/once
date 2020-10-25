/* ################
 * ## Pirámide 2 ##
 * ################
 *
 * Utiliza el bucle "for" para crear las siguiente figura con asteriscos (*). Debe existir una
 * variable que permita modificar la altura de la pirámide. Para el ejemplo expuesto a 
 * continuación se ha tomado como referencia una altura de 4: 
 * 
 * - Figura 2:
 * 
 *        *
 *       **
 *      ***
 *     ****
*/

'use strict';

const height = 4;
let floor = '';

for(let i = 0; i < height; i++) {

    // Metemos los espacios de la línea actual.
    for(let spaces = (height - 1) - i; spaces > 0; spaces--) {
        floor += ' ';
    }

    // Metemos los asteriscos de la línea actual.
    for(let asterisk = 1 + i; asterisk > 0; asterisk--) {
        floor += '*';
    }

    console.log(floor);

    floor = '';
} 


