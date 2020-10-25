/* #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Dada una variable que almacene la edad de una persona:
 *
 *  - Si edad es "menor" que 18 muestra por consola un mensaje indicando que la
 *    la persona tiene menos de 18 años.
 *
 *  - Si la edad es "igual o mayor" que 18 y "menor" que 45 muestra por consola un
 *    mensaje indicando que la persona tiene entre 18 y 44 años.
 *
 *  - Si edad es "igual o mayor" que 45 muestra por consola un mensaje indicando
 *    que la persona tiene 45 años o más.
*/

'use strict';

let age = 48;

// Si edad es menor que 18...
if (age < 18) {
    console.log('Tiene menos de 18 años.');
}

// Si edad es "mayor o igual" a 18 Y ADEMÁS es "menor" que 45...
else if (age >= 18 && age < 45) {
    console.log('La persona tiene entre 18 y 44 años.');
}

// Si ninguna de las condiciones anteriores se cumple...  
else {
    console.log('La persona tiene 45 años o más.');
} 