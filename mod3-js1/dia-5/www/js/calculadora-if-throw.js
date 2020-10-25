/* ############################
*  ## Calculadora "if" throw ##
*  ############################
*
*   
*
*/

'use strict';

const calculate = (firstNum, secondNum, typeOfOp) => {
    
    // Suma:
    if(typeOfOp === '+') {
        return `${firstNum} + ${secondNum} = ${firstNum + secondNum}`;
    } 
    
    // Resta:
    else if(typeOfOp === '-') {
        return `${firstNum} - ${secondNum} = ${firstNum - secondNum}`;
    } 
    
    // Multiplicación:
    else if(typeOfOp === '*') {
        return `${firstNum} * ${secondNum} = ${firstNum * secondNum}`;
    } 
    
    // División:
    else if(typeOfOp === '/') {
        if(secondNum === 0) {
            throw new Error ('No es posible dividir entre 0.');
        } else {
            return `${firstNum} / ${secondNum} = ${firstNum / secondNum}`;
        } 
    } 
    
    // Potencia:
    else if(typeOfOp === '**') {
        return `${firstNum} ** ${secondNum} = ${firstNum ** secondNum}`;
    } 
    
    // En caso de error:
    else {
        throw new Error ('Tipo de operación incorrecto');
    }
}

try {
    console.log(calculate(4, 2, '/'));
} catch(error) {
    console.error(error);
} 



