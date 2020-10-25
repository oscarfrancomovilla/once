'use strict';

// Generamos un nº aleatorio.
function generatePassword() {
    return Math.ceil(Math.random() * 10);
}

// Desactivar bomba.
const deactivateBomb = function (password) {
    // Damos al usuario 5 intentos.
    for (let i = 0; i < 5; i++) {

        // Permitimos al usuario insertar un nº.
        const userPassword = parseInt(prompt('Inserte la contraseña:'));

        // Comprobamos si el usuario ha acertado.
        if (userPassword === password) {
            return true;
        }

    }
    return false;
}

if(deactivateBomb(generatePassword())){
    console.log('¡Vives un día más!');
} else {
    console.log('BOOOOOOOOOM!!!');
}
