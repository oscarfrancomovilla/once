/**
 * ####################################################
 * ## Obtener un array con las provincias de Galicia ##
 * ####################################################
 * 
 * Página web: el-tiempo.net/api
 * 
 * https://www.el-tiempo.net/api/json/v2/provincias
 * 
 */

'use strict';

async function getProvinces(community) {
    
    try {
        const response = await fetch('https://www.el-tiempo.net/api/json/v2/provincias');
        const data = await response.json();

        const myProvinces = data.provincias.filter((province) => {
            return province.COMUNIDAD_CIUDAD_AUTONOMA === `${community}`;
        });

        console.log(myProvinces);

        return myProvinces;
    } 
    
    catch(error) {
        console.log(error);
    }

}

// getProvinces('Galicia');

/**
 * #####################################################
 * ## Obtener un array con los municipios de A Coruña ##
 * #####################################################
 * 
 * Página web: el-tiempo.net/api
 * 
 * https://www.el-tiempo.net/api/json/v2/municipios
 * 
 */

async function getTowns(province) {
    const response = await fetch('https://www.el-tiempo.net/api/json/v2/municipios');
    const towns = await response.json(); 

    // Almacenamos los municipios de la provincia.
    const myTowns = towns.filter((town) => town.NOMBRE_PROVINCIA === `${province}`);

    // Nos quedamos únicamente con el nombre de cada provincia.
    const townsName = myTowns.map((town) => town.NOMBRE);

    // Nº total de habitantes en la provincia.
    const totalPopulation = myTowns.reduce((acc, town) => {
        return acc += town.POBLACION_MUNI;
    }, 0);

    console.log(myTowns);
}

// getTowns('Pontevedra');

/**
 * ########################################################
 * ## Obtener la info geográfica y meteorológica de Vigo ##
 * ########################################################
 * 
 * Página web: el-tiempo.net/api
 * 
 * URL_1: https://www.el-tiempo.net/api/json/v2/municipios
 * 
 *  - Obtenemos el CODPROV y el ID para poder consultar la información que buscamos
 *    con la URL_2.
 * 
 * URL_2: https://www.el-tiempo.net/api/json/v2/provincias/${provinceID}/municipios/${townID}
 * 
 */

async function getTownInfo(town_name) {

    const townsArray = await (await fetch('https://www.el-tiempo.net/api/json/v2/municipios')).json();
    
    const myTown = townsArray.filter((town) => town.NOMBRE === `${town_name}`)[0];
    
    const townID = myTown.CODIGOINE.substring(0, 5); // "36057"

    const provinceID = myTown.CODPROV; // 36

    const data = await (await fetch(`https://www.el-tiempo.net/api/json/v2/provincias/${provinceID}/municipios/${townID}`)).json();

    console.log(data.pronostico.hoy);
}

getTownInfo('Vigo');
