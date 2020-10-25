/* #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Dado el array = [1, 3, 9, 14, 17, 22]
 * 
 *  - Iterar por todos los elementos dentro de un array utilizando "while" y mostrarlos en pantalla.
 *
 *  - Iterar por todos los elementos dentro de un array utilizando "for" y mostrarlos en pantalla.
 *
 *  - Iterar por todos los elementos dentro de un array utilizando "for of" y mostrarlos en pantalla.
 *
 *  - Mostrar todos los elementos dentro de un array sumándole uno a cada uno. 
 *
 *  - Generar otro array con todos los elementos del primer array incrementados en 1. ¿Con el método push?
 *
 *  - Calcular el promedio.
 * 
*/

'use strict;'

// Este es el array que vamos a utilizar para el ejercicio.
const numbers = [1, 3, 9, 14, 17, 22];

// Declaramos un contador para usar en el "while".
let counter = 0;

// Iterar por todos los elementos utilizando "while" y mostrarlos en pantalla.
while(counter < numbers.length) {
    console.log(numbers[counter]);
    counter++;
}

console.log('-------------');

// Iterar por todos los elementos utilizando "for" y mostrarlos en pantalla.
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log('-------------');

// Iterar por todos los elementos utilizando "for of" y mostrarlos en pantalla.
for(const num of numbers) {
    console.log(num);
}

console.log('-------------');

// Iterar por todos los elementos y mostrarlos en pantalla sumándoles 1 unidad.
for(const num of numbers) {
    console.log(num + 1);
}

console.log('-------------');

// Declaramos un array vacío en el que pushearemos varios elementos.
const numbersOne = [];

// Generar otro array con todos los elementos del primer array incrementados en 1.
for(const num of numbers) {
    numbersOne.push(num + 1);
}

console.log(numbersOne);

console.log('-------------');

// Declaramos una variable donde almacenaremos la suma de los elementos del array.
let total = 0;

for(let i = 0; i < numbers.length; i++) {
    total += numbers[i]
}

// Hayamos el promedio.
const average = total / numbers.length;

console.log(average);