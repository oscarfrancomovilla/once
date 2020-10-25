/* ###################
 * ## Alphabet Soup ## 
 * ###################
 * 
 * Dada la función "LetterCapitalize(str)" toma el parámetro "str" que se le pasa y ponga 
 * en mayúsculas la primera letra de cada palabra. Las palabras estarán separadas por un 
 * solo espacio.
 * 
 * Por ejemplo, para el string "Hoy voy a repasar JavaScript a tope con la Cope" nos 
 * debería devolver "Hoy Voy A Repasar JavaScript A Tope Con La Cope".
 * 
*/

'use strict';

function LetterCapitalize_1(str) {
    str = str.split(' ');

    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].split('');
    }

    for (let i = 0; i < str.length; i++) {
        str[i][0] = str[i][0].toUpperCase();
    }

    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].join('');
    }

    return str.join(' ');
}

function LetterCapitalize_2(str) {
    str = str.split(' ');

    for(let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
    }
    
    return str.join(' ');
}

console.log(LetterCapitalize_2('Hoy voy a repasar JavaScript a tope con la Cope'));

