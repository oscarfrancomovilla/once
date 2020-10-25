/* #######################################
 * ## Calculadora "switch" con prompt() ##
 * #######################################
*/

'use strict';

const num_a = parseInt(prompt('Introduce el 1er nº:'));
const num_b = parseInt(prompt('Introduce el 2º nº:'));
const option = prompt('Selecciona el tipo de operación: suma(+), resta(-), multiplicación(*), división(/) y potencia(**).'); 


// En este caso he aprovechado lo aprendido sobre "template literals" o "template strings" para
// mostrar por consola la operación realizada. ¡Echad un ojo! ;)
switch(option) {
    case '+':
        console.log(`${num_a} + ${num_b} = ${num_a + num_b}`);
        break;

    case '-':
        console.log(`${num_a} - ${num_b} = ${num_a - num_b}`);
        break;

    case '*':
        console.log(`${num_a} * ${num_b} = ${num_a * num_b}`);
        break;

    case '/':
        // Con este "if" nos aseguramos de que "num_b" no es 0.
        if(num_b === 0) {
            console.log('No es posible dividir entre 0.');
        } else {
            console.log(`${num_a} / ${num_b} = ${num_a / num_b}`);
        } 
        break;

    case '**':
        console.log(`${num_a} ** ${num_b} = ${num_a ** num_b}`);
        break;

    default:
        console.log('No has seleccionado un tipo de operación correcto.');
        break;
} 