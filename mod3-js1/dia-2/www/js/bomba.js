/* ########################
 * ## Desactiva la bomba ##
 * ########################
 *
 * 
 * Llegó el momento de poner en práctica todo lo aprendido hasta ahora para...
 * ¡¡DESACTIVAR UNA BOMBA!! Tranquilos, no tenemos que ser expertos en explosivos.
 * Se trata de crear un juego en el que damos al usuario 5 intentos para tratar de
 * desactivar la bomba. 
 * 
 * Estos son los pasos que debes seguir para tratar de conseguir el objetivo:
 * 
 *  - Generar un nº aleatorio del 1 al 10. Existe una función en JavaScript que 
 *    nos permite generar un nº al azar, ¿por qué no investigas un poco?
 * 
 *  - Una vez hayamos generado el nº de desactivación daremos al usuario un total
 *    de 5 intentos para tratar de averigual en nº en cuestión. 
 * 
 *  - Si acierta detenemos el bucle y mostramos un mensaje que indica que la bomba
 *    ha sido desactivada. De lo contrario indicamos que la bomba ha explotado.
*/

'use strict';

// Generamos un nº aleatorio.
const password = Math.ceil(Math.random() * 3);

// Damos al usuario 5 intentos.
for(let i = 0; i < 5; i++) {
    
    // Permitimos al usuario insertar un nº.
    const userPassword = parseInt(prompt('Inserte la contraseña:'));

    // Comprobamos si el usuario ha acertado.
    if(userPassword === password) {
        alert('¡Vives un día más!');
        break;
    }

    // Si el usuario ha agotado los intentos y no ha acertado.
    if(i === 4 && userPassword !== password) {
        alert('¡BOOOOOOOOOOM!');
    }

}
