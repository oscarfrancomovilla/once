/* ########################
 * ## Pirámide 2 - Debug ##
 * ########################
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

const height = 4; // Representa el total de líneas.
let floor = '';

for(let i = 0; i < height; i++) {
    console.log(`La variable "i" es igual a ${i}, por tanto estamos en la línea ${i+1}.`);

    // ESPACIOS.
    console.log(`height - 1 - i = ${height - 1 - i} espacios.`);
    for(let spaces = (height - 1) - i; spaces > 0; spaces--) {
        floor += ' ';
        console.log(`Espacios = ${spaces}. Mientras que ${spaces} sea mayor que 0... Agrego un espacio.`); 
        console.log(`floor = '${floor}'`);
    }

    // ASTERISCOS.
    console.log(`1 + i = ${1 + i} asteriscos.`);
    for(let asterisk = 1 + i; asterisk > 0; asterisk--) {
        floor += '*';
        console.log(`Asteriscos = ${asterisk}. Mientras que ${asterisk} sea mayor que 0... Agrego un asterisco.`);
        console.log(`floor = '${floor}'`);
    }

    console.log(`Imprimo la línea: ${floor}`);

    console.log('Después de imprimir la línea la vaciamos para evitar que la siguiente línea contenga ');

    floor = '';
} 


