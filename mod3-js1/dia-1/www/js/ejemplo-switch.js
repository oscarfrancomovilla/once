/* #######################
 * ## Ejemplo de Switch ##
 * #######################
*/

'use strict';

const option = 0;

// El "switch" requiere de una variable que usaremos como interruptor.
// Debemos indicar esta variable entre los paréntisis.
switch (option) {

    // En el caso de que "option" sea igual a 0...
    case 0:
        console.log('Es un perro.');
        break;

    // En el caso de que "option" sea igual a 1...
    case 1:
        console.log('Es un gato.');
        break;

    // En el caso de que "option" sea igual a 2...
    case 2:
        console.log('Es un ratón.');
        break;

    // En el caso de que "option" sea igual a un valor desconocido...
    // Sería lo mismo que el "else", en caso de que lo anterior no se cumpla
    // haz esto:
    default:
        console.log('No se reconoce el animal.');
        break;

} 
