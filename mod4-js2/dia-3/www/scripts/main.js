// es necesario que en el otro script hayamos exportado
// y que el html el script tenga el type module  <script src="/scripts/main.js" type="module"></script>

// import operacion from './operations.js'
// import {cuadrado} from './operations.js'
// import operacion, {cuadrado} from './operations.js'

// console.log(operacion(5))
// console.log(cuadrado(4))

import { nombrePersonaje, edad } from '/scripts/utils.js'
console.log(nombrePersonaje, edad)

import {creaPersonaje} from '/scripts/utils.js'

// creaPersonaje('Lisa')
creaPersonaje(nombrePersonaje)

// si tienes muchas variables puedes utilizar * y le agregas un nombre
import * as datosPersonaje from './utils.js' // el nombre en este caso sería datosPersonaje
// puedes acceder a ellos como si fueran propiedades del nombre
// console.log(datosPersonaje.status)
// Destructuring
const {status} = datosPersonaje

console.log(status)

// Importa un módulo entero para efectos secundarios sólamente, sin importar ningun elemento

import './services.js'
suma10(30) // Error
