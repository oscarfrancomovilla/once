// para exportar una funcion por defecto dentro de un documento
// es necesario utilizar export default

// const cuadrado = x => {
//     return x * x
// }

export const cuadrado = x => {
    return x * x
}

const cubo = x => {
    return cuadrado(x) * x
}

export default cubo