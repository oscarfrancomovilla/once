/* #################
 * ## Ejercicio 6 ##
 * #################
 *
 * Crea un array de caracteres que contenga letras de la ‘A’ a la ‘Z’ (solo las mayúsculas). Después, ve pidiendo 
 * posiciones del array por teclado y si la posicion es correcta, se añadirá a una cadena que se mostrará al final. Dejaremos de 
 * insertar cuando se introduzca un -1.
 *
 * Por ejemplo:
 * 
 *  0 --> Añadirá la ‘A’
 *  5 --> Añadirá la ‘F’
 *  25 --> Añadirá la ‘Z’
 *  50 --> Error, inserte otro numero
 *  -1 --> Fin
 * 
 * Cadena resultante: AFZ
 * 
*/

'use strict;'

const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

/**
 * 
 * @param {Array} lettersArr --> Array que contiene letras de la A a la Z mayúscula.
 */
function giveMeLetters(lettersArr) {

    // Interruptor para que el bucle funcione o no. True es igual a encendido.
    let mySwitch = true;

    // Creo un array vacío donde almaceno los resultados.
    const result = [];

    while(mySwitch === true) {

        const userIndex = parseInt(prompt('Inserte un índice del 0 al 25:'));

        // Si "userIndex" es igual a -1 el interruptor se apaga y el bucle se detiene.
        if(userIndex === -1) {
            mySwitch = false;
        } else if (userIndex < -1 || userIndex > 25) {
            alert('Error, inserte otro número.');
        } else {
            result.push(lettersArr[userIndex]);
        }

    }

    return result;

}

console.log(giveMeLetters(abc));

