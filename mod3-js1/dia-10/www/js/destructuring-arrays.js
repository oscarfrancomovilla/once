/**
 * ##############################
 * ## Destructuring con arrays ##
 * ##############################
 */

// Imaginemos un array con tres elementos.
const colors = ['amarillo', 'azul', 'negro'];

// Si en ES5 quisiéramos asignar los valores a variables haríamos tal que así:
var first = colors[0]; // 'amarillo'
var second = colors[1]; // 'azul'
var third = colors[2]; // 'negro'

// Con destructuring en ES2015 (ES6) lo podríamos hacer:
const [a, b, c] = colors;

// a = 'amarillo'
// b = 'azul'
// c = 'negro'

const [x, , y] = colors;

// x = 'amarillo'
// y = 'negro'

// Destructuring es muy útil cuando queremos intercambiar un valor por otro.
let num_1 = 10;
let num_2 = 35;

console.log(num_1, num_2);

[num_1, num_2] = [num_2, num_1];

console.log(num_1, num_2);

