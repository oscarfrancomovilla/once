/* #################
*  ## Ejercicio 1 ##
*  #################
*
* Ordena el siguiente array numérico de - a +: [4, 10, 7, 1, 2] 
* 
*/

'use strict';

const numbers = [4, 10, 7, 1, 2];

function orderArray(numArr) {

    // Recorrer el array una vez no basta para ordenarlo. Nos aseguramos
    // de recorrerlo las veces suficientes. De 
    for (let k = 0; k < numArr.length; k++) {

        // Este es el "for" encargado de ordenar el array.
        for (let i = 0; i < numArr.length; i++) {

            // Comprobamos si el valor actual es > que el siguiente.
            if (numArr[i] > numArr[i + 1]) {
                // Almacenamos el valor de "numArr[i]" porque de lo contrario
                // lo perderíamos al hacer "numArr[i] = numArr[i + 1]".
                let tmp = numArr[i];
                numArr[i] = numArr[i + 1];
                numArr[i + 1] = tmp;
            }

        }

    }

    return numArr;

}

console.log(orderArray(numbers));