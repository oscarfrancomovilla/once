/* ################
 * ## Pirámide 4 ##
 * ################
 *
 * Utiliza el bucle "for" para crear las siguiente figura con asteriscos (*). Debe existir una
 * variable que permita modificar la altura de la pirámide. Para el ejemplo expuesto a 
 * continuación se ha tomado como referencia una altura de 4: 
 * 
 * - Figura 4:
 * 
 *        *
 *       ***
 *      *****
 *     *******
 *      *****
 *       ***
 *        *
*/

'use strict';

const height = 4;
let floor = '';

// Primera mitad del rombo.
for(let i = 0; i < height; i++) {

    // Espacios.
    for(let spaces = (height - 1) - i; spaces > 0; spaces--) {
        floor += ' ';
    }

    // Asteriscos.
    for(let asterisk = (2 * i) + 1; asterisk > 0; asterisk--) {
        floor += '*';
    }

    console.log(floor);

    floor = '';
} 


// Segunda mitad del rombo.
for(let i = height - 1; i > 0; i--) {

    // Espacios.
    for(let spaces = i; spaces < height; spaces++) {
        floor += ' ';
    }

    // Asteriscos.
    for(let asterisk = (2 * i) - 1; asterisk > 0; asterisk--) {
        floor += '*';
    }

    console.log(floor);

    floor = '';
} 