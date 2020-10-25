/*
 * SOSPECHOSOS
 * 
 * 1. Crea varios arrays con 3 elementos:
 * 
 *      - Array de nombres.
 *    
 *      - Array con color de ojos
 * 
 *      - Array con la altura: alto o bajo.
 *      
 *      - Array que indique si está tatuado: true o false.
 * 
 *      - Array con pistas: la pista debe indicar el color de ojos, la altura o si está tatuado o no.
 * 
 *
 * 2. Con los arrays anteriores genera un array de sospechosos. Para ello utiliza una función. Se supone 
 *    que los índices de los arrays están relacionados. El sospechoso debe tener un nombre, un color de ojos, 
 *    una altura, si está o no tatuado y una pista. 
 *
 * 3. Crea el objeto "Detective". 
 *    
 *      - El detective debe tener un nombre, un array de pistas y un array de sospechosos.
 *        Ambos arrays estarán vacíos en un primer momento. 
 * 
 *      - Un método "investigate()" que recibirá un array de sospechosos como parámetro y 
 *        recopilará las pistas devolviéndolas en un nuevo array de pistas.
 * 
 *      - Un método "findGuilty()" que recibirá un array de pistas como parámetro y nos devolverá
 *        un array con los posibles culpables.
 *
*/

const suspectsNames = ['Manolo', 'Sara', 'Armando'];

const eyeColor = ['marrón', 'verde', 'marrón'];

const size = ['alto', 'alto', 'bajo'];

const isTattoed = [false, false, true];

const clues = [
    {
        size: 'alto'
    },
    {
        isTattoed: false
    },
    {
        eyeColor: 'marrón'
    }
];

/**
 * ###################################################
 * ## Función que devuelve un array de sospechosos. ##
 * ###################################################
 */
const createSuspectsArray = function (namesArr, eyesArr, sizeArr, tattoedArr, cluesArr) {
    return namesArr.map((value, i) => {
        return {
            name: value,
            eyeColor: eyesArr[i],
            size: sizeArr[i],
            isTattoed: tattoedArr[i],
            clue: cluesArr[i]
        }
    })
}

/**
 * ###########################
 * ## Lista de sospechosos. ##
 * ###########################
 */

const suspectList = createSuspectsArray(suspectsNames, eyeColor, size, isTattoed, clues);

console.log(suspectList);


/**
 * #######################
 * ## D E T E C T I V E ##
 * #######################
 */

const detective = {

    name: 'Sherlock',
    clues: [],
    suspects: [],

    // Método que recopila las pistas.
    investigate: (suspectsArray) => {
        detective.clues = suspectsArray.map((suspect) => {
            return suspect.clue;
        });
    },

    // Método que nos devuelve los sospechosos cuyas características
    // coincidan con las pistas (clues);
    findGuilty: (suspectsArray) => {
        return suspectsArray.filter((suspect) => {
            return clues.every((value) => {
                const clueKey = Object.keys(value)[0];
                return value[clueKey] === suspect[clueKey];
            })
        })
    }

}

// Llamamos al método "investigate()".
detective.investigate(suspectList);

console.log(detective.findGuilty(suspectList));
