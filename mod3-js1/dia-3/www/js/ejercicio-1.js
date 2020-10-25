/* #################
*  ## Ejercicio 1 ##
*  #################
*
* - Crea el objeto coche y asígnale las propiedades modelo, marca y color.
* 
* - Muestra el objeto por medio de un "console.log".
* 
* - Modifica el valor de la propiedad color y agrega la propiedad año de 
*   matriculación.
* 
* - Utiliza un "confirm" para mostrar por consola las propiedades, o los
*   valores. Si la persona acepta el "confirm" se mostrarán las propiedades,
*   de lo contrario, se mostrarán los valores.
* 
*/

'use strict';

const car = {
    brand: 'Opel',
    model: 'Astra',
    color: 'negro'
}

console.log(car);

car.color = 'rojo';
car.anoMatriculacion = '2007';

if(confirm('Para mostar propiedades acepta el confirm. Para mostrar valores cancela.')) {
    alert(Object.keys(car));
} else {
    console.log(Object.values(car));
} 

