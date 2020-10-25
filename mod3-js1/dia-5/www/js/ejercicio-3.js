/* #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Recorre con filter el siguiente array de objetos y filtra a los estudiantes cuya 
 * nota sea igual o superior a 7.
 * 
*/

'use strict;'

let students = [
	{
		name: 'Álvaro',
		score: 0
	},
	{
		name: 'Daniel',
		score: 6
	},
	{
		name: 'Alexys',
		score: 2
	},
	{
		name: 'Rafa',
		score: 7
	},
	{
		name: 'Alejandro',
		score: 8
	},
	{
		name: 'Sofia',
		score: 9
	}
];

const scoreHigherThan6 = students.filter((student) => student.score >= 7);

console.log(scoreHigherThan6);

