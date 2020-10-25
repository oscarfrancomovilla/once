/* ###################
 * ## Alphabet Soup ## 
 * ###################
 * 
 * Dada la función "CheckNums(num1,num2)" toma los dos parámetros que se pasan 
 * y devuelve true si "num2" es mayor que "num1", de lo contrario devuelve false. 
 * Si los valores de los parámetros son iguales entre sí, entonces devuelve el valor -1.
*/

'use strict';

function CheckNums_1(num1, num2) {
    if(num1 > num2) {
        return false;
    } else if (num1 < num2) {
        return true;
    } else {
        return -1;
    }
} 

// Utilizando el operador ternario.
function CheckNums_2(num1, num2) {
    return (num1 > num2) ? false : (num1 < num2) ? true : -1;
}

console.log(CheckNums_2(8, 3));



