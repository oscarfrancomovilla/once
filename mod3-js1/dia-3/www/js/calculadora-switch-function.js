'use strict';

const num_a = parseInt(prompt('Introduce el 1er nº:'));
const num_b = parseInt(prompt('Introduce el 2º nº:'));
const option = prompt('Selecciona el tipo de operación: suma(+), resta(-), multiplicación(*), división(/) y potencia(**).');  

const calculate = (firstNum, secondNum, typeOfOp) => {
    switch(typeOfOp) {
        case '+':
            return `${firstNum} + ${secondNum} = ${firstNum + secondNum}`;
            break;
    
        case '-':
            return `${firstNum} - ${secondNum} = ${firstNum - secondNum}`;
            break;
    
        case '*':
            return `${firstNum} * ${secondNum} = ${firstNum * secondNum}`;
            break;
    
        case '/':
            // Con este "if" nos aseguramos de que "num_b" no es 0.
            if(secondNum === 0) {
                return 'No es posible dividir entre 0.';
            } else {
                return `${firstNum} / ${secondNum} = ${firstNum / secondNum}`;
            } 
            break;
    
        case '**':
            return `${firstNum} ** ${secondNum} = ${firstNum ** secondNum}`;
            break;
    
        default:
            return 'No has seleccionado un tipo de operación correcto.';
            break;
    } 
}

const result = calculate(num_a, num_b, option);

const result_1 = calculate(4, 2, '*');

console.log(result);

console.log(result_1);