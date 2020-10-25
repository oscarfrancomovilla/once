/*
 * EL ZORRO Y LAS GALLINAS
 * 
 * 1. Crea el objeto "Fox" y el objeto "Chicken". Ambos objetos tendrán la propiedad "animal" 
 *    y el método "breed". Este método devuelve un nuevo zorro o una nueva gallina 
 *    (en función del animal).
 *
 * 2. A mayores, el zorro tiene el método "goLunch()" que recibe un array de animales
 *    como parámetro, busca una gallina en el array y la elimina.
 *
 * 3. Crea una función que devuelva un nuevo array con dos animales al azar. A la función
 *    debemos pasarle el objeto zorro y el objeto gallina como parámetros.
 * 
 *   - 2 zorros.
 * 
 *   - 2 gallinas.
 * 
 *   - 1 gallina / 1 zorro.
 *
 *
 * 4. Crea otra función que reciba un array con dos animales y haga lo siguiente:
 *
 *   - Si en el array hay 2 zorros se llama a la función breed() y nace otro zorro.
 * 
 *   - Si en el array hay 2 gallinas se llama a la función breed() y nace otra gallina.
 * 
 *   - Si en el array hay un animal de cada el zorro se come a la gallina.
 *
*/ 

/**
 * ###################
 * ## G A L L I N A ##
 * ###################
*/

const chicken = {
    type: 'gallina',
    breed: () => chicken
}

/**
 * ###############
 * ## Z O R R O ##
 * ###############
*/

const fox = {
    type: 'zorro',
    breed: () => fox,
    goLunch: (animalsArray) => {
        for (let i = 0; i < animalsArray.length; i++) {
            if (animalsArray[i].type === 'gallina') {
                animalsArray.splice(i, 1);
            }
        }

        return animalsArray;
    }
}

/**
 * ###########################################################
 * ## Función que devuelve un array con 2 animales al azar. ##
 * ###########################################################
 * 
 * @param {Object} chickenObj --> Objeto gallina: type, breed().
 * @param {Object} foxObj --> Objeto zorro: type, breed(), goLunch().
 */
const mixAnimals = (chickenObj, foxObj) => {
    
    const animals = [];

    for (let i = 0; i < 2; i++) {
        // Genero un nº aleatorio entre 0 y 1.
        const randomAnimal = Math.floor(Math.random() * 2);

        // Seleccionar el animal en función del valor aleatorio obtenido. Si
        // el valor es 0 selecciono un zorro, si es 1 selecciono una gallina.
        // El 0 se corresponde a un valor "false" (apagado) y el 1 a un valor
        // "true" (encendido).
        const selectedAnimal = (randomAnimal) ? chickenObj : foxObj;

        // Pusheamos el animal seleccionado.
        animals.push(selectedAnimal)
    }

    return animals;

}

// Utilizamos la función "mixAnimals" para generar un array y lo almacenamos
// en esta nueva variable.
const listOfAnimals = mixAnimals(chicken, fox);


/**
 * ################################################################
 * ## Función que comprueba qué tipo de animales tiene el array. ##
 * ################################################################
 * 
 * @param {Array} animalsArray --> Un array con dos animales.
 */

const checkAnimalsArray = (animalsArray) => {

    // Si ambos animales son del mismo tipo...
    if(animalsArray[0].type === animalsArray[1].type) {

        // Llamo al método "breed()" del animal.
        const getAnimal = animalsArray[0].breed();

        // Pusheo el nuevo animal en el array.
        animalsArray.push(getAnimal);
    } 
    
    // Si ambos animales no son del mismo tipo...
    else {
        // Buscamos el index del zorro.
        for (let i = 0; i < animalsArray.length; i++) {
            // Si hemos dado con el index de zorro...
            if (animalsArray[i].type === 'zorro') {
                // Llamamos al método "goLunch()" del zorro y le pasamos el array.
                animalsArray[i].goLunch(animalsArray);
            }
        }
    }

    return animalsArray;

}

console.log(checkAnimalsArray(listOfAnimals)); 