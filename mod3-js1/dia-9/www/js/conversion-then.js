'use strict';

// Función que convierte un valor en euros a dólares.
function eur_to_usd(quantity) {
    fetch('https://api.exchangerate-api.com/v4/latest/EUR')
        // Obtenemos la respuesta de la petición.
        .then((response) => {
            // Aplicamos el método "json" para transformar la petición
            // en un objeto con el que JavaScript pueda trabajar.
            const data = response.json();
            return data;
        })
        .then((data) => {
            // Accedemos a la propiedad "USD" del objeto "rates". "rates"
            // a su vez es una propiedad de "data". 
            const conversion = (quantity * data.rates.USD).toFixed(2);
            console.log(`${quantity}€ son ${conversion}$`);
        })
}

// Llamamos a la función y le pasamos el valor.
eur_to_usd(85.91);

// Función que convierte un valor en dólares a euros.
function usd_to_eur(quantity) {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
        // Obtenemos la respuesta de la petición.
        .then((response) => {
            // Aplicamos el método "json" para transformar la petición
            // en un objeto con el que JavaScript pueda trabajar.
            const data = response.json();
            return data;
        })
        .then((data) => {
            // Accedemos a la propiedad "USD" del objeto "rates". "rates"
            // a su vez es una propiedad de "data". 
            const conversion = (quantity * data.rates.EUR).toFixed(2);
            console.log(`${quantity}$ son ${conversion}€`);
        })
}

// Llamamos a la función y le pasamos el valor.
usd_to_eur(100);