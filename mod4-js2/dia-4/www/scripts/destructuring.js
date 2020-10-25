// Destructuring
const familia = ['Rick', 'Morty', 'Jerry', 'Beth', 'Summer']

// ARRAYS
// Destructuring nos permite extraer elementos del array como variables
const [rick, morty] = familia
console.log(rick) // Rick
console.log(morty) // Morty

// Podemos omitir elemntos
const [ , , jerry, , summer] = familia
console.log(jerry) // Jerry
console.log(summer) // Summer

// Podemos extraer todos los elementos restantes usando puntos suspensivos
const [t1, t2, ...tail] = familia
console.log(tail) // ["Jerry", "Beth", "Summer"]

// objetos

const rickSanchez = {nombre: 'Rick', especie: 'Humano', edad: 70, estado: 'vivo', ocupacion: 'científico'}

// Podemos extraer algunos o todos los campos del objeto a variables
const { nombre, edad } = rickSanchez
console.log(nombre) // Rick
console.log(edad) // 70

// Si alguno no existe, queda undefined
const { foo } = rickSanchez
console.log(foo) // undefined

// Podemos extraer todos los campos restantes usando puntos suspensivos
const {especie, estado, ...otros} = rickSanchez
console.log(otros) // {nombre: "Rick", edad: 70, ocupacion: "científico"}

// Podemos indicar valores por defecto
const { bar = 123 } = rickSanchez
console.log(bar) // 123 (porque no existe, sino tendría su valor)

// Podemos renombrar variables
const { nombre: name } = rickSanchez // const name = rickSanchez.nombre
console.log(name)

// Creacion
// podemos crear objetos y arrays de el mismo modo

// arrays
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const fusionArr = [0, ...arr1, ...arr2, 7]
console.log(fusionArr) // [0, 1, 2, 3, 4, 5, 6, 7]

//objetos
const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }
const fusionObj = {...obj1, ...obj2, e: 5}
console.log(fusionObj) // {a: 1, b: 2, c: 3, d: 4, e: 5}

//cuando se repite alguno gana el último
const obj3 = {a: 'a', b: 'b', c: 'c', d: 'd'}
const fusionObjCol = {...obj1, ...obj3, d: 'gana'}
console.log(fusionObjCol)