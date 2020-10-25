/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Declara la arrow function "sayHello(callback)" y pásale como parámetro otra función 
 * llamada "userInfo()."
 * 
 * - La función "userInfo(firstname, surname)" solicitará al usuario dos parámetros,
 *   un nombre y un apellido. Esta función nos devolverá un saludo con el nombre y el 
 *   apellido de un usuario.
 * 
 * - "sayHello(myCallback)" solicitará como parámetro un callback. Llamaremos al callback
 *   dentro de la función. Dentro de "sayHello" debe haber dos variables que almacenen un 
 *   nombre y un apellido, y se las pasamos al llamado del callback.
 * 
*/

'use strict;'

// Función que vamos a pasar como callback.
function userInfo(firstname, surname) {
    return `¡Hola ${firstname} ${surname}`;
}

// Función que recibe el callback.
const sayHello = (myCallback) => {

    const userName = prompt('Introduce un nombre:');
    const userSurname = prompt('Introduce un apellido:');

    return myCallback(userName, userSurname);

}

// Llamamos a la función, le pasamos "userInfo" y mostramos el valor
// por consola.
console.log(sayHello(userInfo));