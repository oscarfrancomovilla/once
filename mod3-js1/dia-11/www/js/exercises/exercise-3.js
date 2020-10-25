/* ###################
 * ## Alphabet Soup ## 
 * ###################
 * 
 * Dada la función "FirstFactorial(num)" toma el parámetro "num" que se le pasa y devuelve 
 * el factorial del mismo. Por ejemplo: si "num = 4", entonces el programa debe devolver 
 * (4 * 3 * 2 * 1) = 24. 
 * 
 * Para los casos de prueba, el rango estará entre 1 y 18 y la entrada será siempre un 
 * número entero.
*/

'use strict';

function FirstFactorial(num) {

    for(let i = num - 1; i > 0; i--) {
        num *= i;
    }

    return num;

}

console.log(FirstFactorial(4));


