/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * - Crea una función "showInfo()" a la que le pases como parámetros un nombre y una edad y nos devuelva 
 *   ambos parámetros. Muestra lo que devuelva la función por consola. Aplica lo aprendido sobre "template 
 *   strings" (template literals).
 * 
 * - Llama a la función dos veces con parámetros distintos.
 * 
 * - Debes crear una declaración de función, una expresión de función y una arrow function.
 * 
*/

'use strict;'

const name = 'Lucía';
const age = 25;

// Declaración de función.
function showInfo_1(userName, userAge) {
    return `El nombre es ${userName} y la edad es ${userAge}.`;
}

console.log(showInfo_1(name, age));

// Expresión de función.
const showInfo_2 = function(userName, userAge) {
    return `El nombre es ${userName} y la edad es ${userAge}.`;
}

console.log(showInfo_2('Manu', 65));

// Arrow function.
const showInfo_3 = (userName, userAge) => `El nombre es ${userName} y la edad es ${userAge}.`;

console.log(showInfo_3('Sara', 30));
