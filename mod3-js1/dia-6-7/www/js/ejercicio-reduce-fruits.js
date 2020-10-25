const fruitBasket = [
    'banana',
    'cherry',
    'orange',
    'apple',
    'cherry',
    'orange',
    'apple',
    'banana',
    'cherry',
    'orange',
    'fig'
];

const numberOfFruits = fruitBasket.reduce((acc, fruit) => {

    // Si la fruta no existe la creamos y le asignamos un valor.
    if (!acc[fruit]) {
        acc[fruit] = 1;
    }

    // Si la fruta existe aumentamos el valor en una unidad.
    else {
        acc[fruit]++;
    }

    // Es obligatorio retornar el acumulador.
    return acc;

}, {}); // acc = {}

console.log(numberOfFruits); 


