'use strict';

const URL_EUR = 'https://api.exchangerate-api.com/v4/latest/EUR';
const URL_USD = 'https://api.exchangerate-api.com/v4/latest/USD';

// Euros a dólares.
async function eur_to_usd(quantity, url) {
    const response = await fetch(url);
    const data = await response.json();
    return (quantity * data.rates.USD).toFixed(2);
}

// IIFE para mostrar el resultado de la función asíncrona.
(async () => {
    const result = await eur_to_usd(85.91, URL_EUR);
    console.log(result);
})();

// Dólares a euros.
async function usd_to_eur(quantity, url) {
    const response = await fetch(url);
    const data = await response.json();
    return (quantity * data.rates.EUR).toFixed(2);
}

// IIFE para mostrar el resultado de la función asíncrona.
(async () => {
    const result = await usd_to_eur(100, URL_USD);
    console.log(result);
})();