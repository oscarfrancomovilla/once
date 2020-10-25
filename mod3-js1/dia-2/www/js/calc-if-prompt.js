/* ###################################
 * ## Calculadora "if" con prompt() ##
 * ###################################
*/

'use strict';

const num_a = parseInt(prompt('Introduce el 1er nº:'));
const num_b = parseInt(prompt('Introduce el 2º nº:'));
const option = prompt('Selecciona el tipo de operación: suma(+), resta(-), multiplicación(*), división(/) y potencia(**).');  

if(option === '+') {
    alert(num_a + num_b);
} else if(option === '-') {
    alert(num_a - num_b);
} else if(option === '*') {
    alert(num_a * num_b);
} else if(option === '/') {
    // Con este "if" nos aseguramos de que "num_b" no es 0.
    if(num_b !== 0) {
        alert(num_a / num_b);
    } else {
        alert('No es posible dividir entre 0.');
    } 
} else if(option === '**') {
    alert(num_a ** num_b);
} else {
    alert('No has seleccionado un tipo de operación correcto.');
}