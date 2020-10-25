'use strict';

const myRegex = /^[A-Za-z ]+$/g;

const word_1 = 'Hola';

const word_2 = '¡Hola!';

const word_3 = 'Hola me llamo Manolo';

const word_4 = 'Hola, me llamo Manolo.';

console.log(myRegex.test(word_1)); // true

console.log(myRegex.test(word_2)); // false

console.log(myRegex.test(word_3)); // true

console.log(myRegex.test(word_4)); // false