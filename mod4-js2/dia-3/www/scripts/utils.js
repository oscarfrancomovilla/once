// para poder exportar es necesario usar la pabalbra export

// export const nombrePersonaje = 'Bart'
// export let edad = 10
// export const status = 'hijo'

// export const creaPersonaje = nombre => {
//     console.log(`el personaje se llama ${nombre}`)
// }

const nombrePersonaje = 'Bart'
let edad = 10
const status = 'hijo'

const creaPersonaje = nombre => {
    console.log(`el personaje se llama ${nombre}`)
}

export {nombrePersonaje, edad, status,  creaPersonaje}
