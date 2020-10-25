/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Utiliza map para obtener únicamene los valores mayores que 8.
 * A lo mejor necesitáis usar condicionales... A lo mejor... Quizás...
 * 
*/

'use strict;'

const numbers = [3, 4, 12, 9, 20, 17, 5, 8];

const higherThan8 = numbers.map((num) => {
    if(num > 8) {
        return num;
    } else {
        return null;
    }
});

console.log(higherThan8);