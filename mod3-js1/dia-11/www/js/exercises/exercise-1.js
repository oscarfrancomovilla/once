/* ###################
 * ## Alphabet Soup ## 
 * ###################
 * 
 * Dada la función "AlphabetSoup(str)" toma el parámetro "str" string que se le 
 * pasa y devuelve el string con las letras en orden alfabético. Supón que los 
 * números y los símbolos de puntuación no se incluirán en la cadena. 
 * 
 * Por ejemplo, para el string "tomates" el resultado debería ser "aemostt".
 * 
*/

'use strict';

function AlphabetSoup(str) {

    str = str.split('').sort().join('');

    return str;
}

const result = AlphabetSoup('tomate');

console.log(result);