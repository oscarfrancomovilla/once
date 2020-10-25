/* ################
 * ## Pirámide 3 ##
 * ################
 *
 * Utiliza el bucle "for" para crear las siguiente figura con asteriscos (*). Debe existir una
 * variable que permita modificar la altura de la pirámide. Para el ejemplo expuesto a 
 * continuación se ha tomado como referencia una altura de 4: 
 * 
 * - Figura 3:
 * 
 *        *
 *       ***
 *      *****
 *     *******
*/

'use strict';

const height = 4;
let floor = '';

for(let i = 0; i < height; i++) {

    // Espacios.
    for(let spaces = (height - 1) - i; spaces > 0; spaces--) {
        floor += ' ';
    }

    // Asteriscos.
    for(let asterisk = 1 + (2 * i); asterisk > 0; asterisk--) {
        floor += '*';
    }

    console.log(floor);

    floor = '';
} 