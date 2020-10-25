/* #################
 * ## Ejercicio 4 ##
 * #################
 * 
 * Crea un objeto con reduce donde las propiedades sean las distintas
 * letras que aparecen en un string, y los valores sean el número de 
 * veces que se repite esa letra en el string. Ignora los espacios y 
 * los puntos. 
 * 
*/

'use strict;'

const myString = 'Tres tristes tigres tragan trigo en un trigal.';

const myArray = myString.toLowerCase().replaceAll(' ', '').replaceAll('.', '').split('');

const numberOfLetters = myArray.reduce((acc, letter) => {
    // Si la letra no existe...
    if(!acc[letter]) {
        acc[letter] = 1;
    }

    // Si la letra ya existe...
    else {
        acc[letter]++;
    }

    return acc;

}, {}); // acc = {}

console.log(numberOfLetters);