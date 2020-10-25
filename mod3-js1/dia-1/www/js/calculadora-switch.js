/* ##########################
 * ## Calculadora "switch" ##
 * ##########################
 *
 * Crea una calculadora con "switch" que opere con dos números. La calculadora 
 * utilizará la variable "option" para decidir el tipo de operación a realizar.
 * Debe poder sumar, restas, multiplicar y dividir. Como bonus, debe permitir 
 * elevar el nº A a la potencia de B.
 *
 * ¡OJO! No se puede dividir entre 0.
*/

'use strict';

const num_a = 2;
const num_b = 3;
const option = '**';

switch(option) {
    case '+':
        console.log(num_a + num_b);
        break;

    case '-':
        console.log(num_a - num_b);
        break;

    case '*':
        console.log(num_a * num_b);
        break;

    case '/':
        // Comprobamos si "num_B" es igual a 0. En ese caso la división
        // no es posible dado que no se puede dividir entre 0.
        if(num_b === 0) {
            console.log('No es posible dividir entre 0.');
        } else {
            console.log(num_a / num_b);
        } 
        break;

    case '**':
        console.log(num_a ** num_b);
        break;

    default:
        console.log('No has seleccionado un tipo de operación correcto.');
        break;
} 