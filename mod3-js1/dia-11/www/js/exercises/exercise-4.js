/* ###################
 * ## Alphabet Soup ## 
 * ###################
 * 
 * Dada la función "FirstReverse(str)" toma el parámetro "str" que se pasa y devuelve la 
 * cadena en orden inverso. Por ejemplo: si la cadena de entrada es "Hello World and Coders" 
 * entonces el programa debe devolver la cadena "sredoC dna dlroW olleH".
*/

'use strict';

function FirstReverse(str) {
    return str.split('').reverse().join('');
}


console.log(FirstReverse('Hello World and Coders'));