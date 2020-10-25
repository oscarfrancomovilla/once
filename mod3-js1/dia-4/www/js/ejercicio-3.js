/* #################
 * ## Ejercicio 3 ##
 * #################
 *
 * - Cuenta el número de letras "r" en el siguiente fragmento de texto:
 *   "Tres tristes tigres tragan trigo en un trigal."
 * 
 * - Ahora cuenta las "t". Debes contar las mayúsculas y las minúsculas.
 * 
 * - Sustituye todas las "e" por "i".
 * 
*/

'use strict;'

let myText = "Tres tristes tigres tragan trigo en un trigal.";

let counter_r = 0;
let counter_t = 0;

// Contador de "r".
for (const letter of myText) {
    if (letter === 'r') {
        counter_r++;
    }
}

console.log(counter_r);

// Contador de "t".
for (const letter of myText) {
    // Tengo en cuenta la "t" minúscula y la "T" mayúscula.
    if (letter === 't' || letter === 'T') {
        counter_t++;
    }
}

console.log(counter_t);

// Sustituímos todas las "e" por "i".
for (const letter of myText) {
    myText = myText.replace('e', 'i');
}

console.log(myText);


