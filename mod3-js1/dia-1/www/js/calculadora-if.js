/* ######################
 * ## Calculadora "if" ##
 * ######################
 *
 * Crea una calculadora con "if" que opere con dos números. La calculadora 
 * utilizará la variable "option" para decidir el tipo de operación a realizar.
 * Debe poder sumar, restas, multiplicar y dividir. Como bonus, debe permitir 
 * elevar el nº A a la potencia de B.
 *
 * ¡OJO! No se puede dividir entre 0.
*/

'use strict';

const num_a = 2;
const num_b = 3;
const option = 0;

if(option === 0) {
    console.log(num_a + num_b);
} else if(option === 1) {
    console.log(num_a - num_b);
} else if(option === 2) {
    console.log(num_a * num_b);
} else if(option === 3) {
    // Comprobamos si "num_B" es igual a 0. En ese caso la división
    // no es posible dado que no se puede dividir entre 0.
    if(num_b === 0) {
        console.log('No es posible dividir entre 0.');
    } else {
        console.log(num_a / num_b);
    } 
} else if(option === 4) {
    console.log(num_a ** num_b);
} else {
    console.log('No has seleccionado un tipo de operación correcto.');
} 