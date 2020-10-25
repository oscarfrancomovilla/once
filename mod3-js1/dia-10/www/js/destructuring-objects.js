/**
 * ###############################
 * ## Destructuring con objetos ##
 * ###############################
 */

'use strict';

const car = {
    brand: 'Opel',
    model: 'Corsa',
    color: 'black'
}

// Si en ES5 quisiéramos asignar los valores a variables haríamos tal que así:
var first = car.brand; // 'Opel'
var second = car.model; // 'Corsa'
var third = car.color; // 'black'

// Con destructuring:
const { brand, model, color } = car;

// const brand = 'Opel'
// const model = 'Corsa'
// const color = 'black'

const { brand: a, color: c } = car;

// const a = 'Opel'
// const c = 'black'