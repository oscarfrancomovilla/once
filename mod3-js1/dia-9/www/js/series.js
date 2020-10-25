'use strict';

/**
 * ##################################################
 * ## Obtener las series de una página determinada ##
 * ##################################################
 */

async function getPageFilms(page) {

    // Obtenemos el response.
    const response = await fetch(`https://www.episodate.com/api/most-popular?page=${page}`);

    // Transformamos el response en un objeto que JavaScript pueda interpretar.
    const data = await response.json();

    // Devolvemos la propiedad "tv_shows" de "data" que es donde se encuentra el listado
    // de series.
    return data.tv_shows;
}

// Llamamos a la función mediante una IIFE asíncrona.
/* (async() => {
    const result = await getPageFilms(31);
    console.log(result);
})(); */

/**
 * ######################
 * ## Buscar una serie ##
 * ######################
 */

async function searchFilms(word, page) {

    // Obtenemos el response.
    const response = await fetch(`https://www.episodate.com/api/search?q=${word}&page=${page}`);

    // Transformamos el response en un objeto que JavaScript pueda interpretar.
    const data = await response.json();

    // Devolvemos la propiedad "tv_shows" de "data" que es donde se encuentra el listado
    // de series.
    return data.tv_shows;
}

// Llamamos a la función mediante una IIFE asíncrona.
/* (async() => {
    const myWord = prompt('Introduce los términos de tu búsqueda:')
    const myPage = prompt('Introduce la página:')
    const result = await searchFilms(myWord, myPage);
    console.log(result);
})(); */

/**
 * #########################################
 * ## Mostrar la descripción de una serie ##
 * #########################################
 */

function getFilmInfo(id) {
    fetch(`https://www.episodate.com/api/show-details?q=${id}`)
        .then((response) => {
            const data = response.json();
            return data;
        })
        .then((data) => {
            console.log(data.tvShow.description);
            return data.tvShow.description;
        })
}

// getFilmInfo(400);

/**
 * #########################################################
 * ## Filtrar por término y dar la opción de mostrar info ##
 * #########################################################
 */

async function searchFilmsAndShowInfo() {

    const word = prompt('¿Que términos deseas buscar?');
    const page = prompt('Seleccione una página.');

    // Obtenemos el response.
    const response = await fetch(`https://www.episodate.com/api/search?q=${word}&page=${page}`);

    // Transformamos el response en un objeto que JavaScript pueda interpretar.
    const data = await response.json();

    for (const serie of data.tv_shows) {
        console.log(serie);
    }

    if(confirm('¿Deseas más info acerca de alguna serie?')) {
        const serieID = prompt('Introduce el ID de la serie:');
        const response = await fetch(`https://www.episodate.com/api/show-details?q=${serieID}`);
        const data = await response.json();
        console.log(data.tvShow.description);
    }
}

searchFilmsAndShowInfo();