/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Crea una variable que almacene tu nombre y otra variable que almacene
 * tu número favorito.
 *  - Muestra ambos valores por consola.
 *  - Cambia tu nº favorito por cualquier otro nº.
 *  - Muestra por consola el resultado del cambio.
 *  - Muestra por consola el tipo de las variables definidas.
*/

'use strict';

// Declaramos una variable (let) y una constante (const).
const name = 'Lucía';
let favouriteNumber = 7;

// Mostramos el valor de ambas variables por consola.
console.log(name, favouriteNumber);

// Modificamos el nº favorito. Si hubiésemos declarado esta variable
// con "const" obtendríamos un error debido a que estaríamos modificando
// una constante.
favouriteNumber = 14;

// Mostramos por consola el nº favorito modificado.
console.log(favouriteNumber);

// Mostramos el tipo de ambas variables.
console.log(typeof (name), typeof (favouriteNumber)); 
