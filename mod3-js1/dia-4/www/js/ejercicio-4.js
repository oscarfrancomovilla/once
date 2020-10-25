/* #################
 * ## Ejercicio 4 ##
 * #################
 *
 * - Convierte el siguiente string en un array. Utiliza como divisor el punto y coma:
 *   "O Vicedo;Santiago;Foz;O Grove;Ribadeo;Chantada;Sarria;Ponteareas"
 * 
 * - Introduce dos ubicaciones a mayores. Una en el índex 5 y otra en el índex 1.
 * 
 * - Elimina las nuevas ubicaciones.
 * 
*/

'use strict;'

const str = "O Vicedo;Santiago;Foz;O Grove;Ribadeo;Chantada;Sarria;Ponteareas";

// Utilizamos el método split y utilizamos el punto y coma como separador.
const arr = str.split(';');

console.log(arr);

// Insertamos un elemento en la posición 1.
arr.splice(1, 0, 'Rábade');

// Insertamos un elemento en la posición 5. ¡Ojo! Si insertamos primero la posición 5 
// puede que tengamos problemas. Mejor ir por orden de menor a mayor.
arr.splice(5, 0, 'Meira');

console.log(arr);

// Localizamos el índice de 'Meira'.
const indexOfMeira = arr.indexOf('Meira');

// Lo eliminamos.
arr.splice(indexOfMeira, 1);

// Localizamos el índice de 'Rábade'.
const indexOfRabade = arr.indexOf('Rábade');

// Lo eliminamos.
arr.splice(indexOfRabade, 1);

// Mostramos el array para comprobar si lo hemos eliminado correctamente.
console.log(arr);