'use strict';

/**
 *  =======================
 *  ··· P E R S O N A S ···
 *  =======================
 */
const persons = [
  {
    name: 'Pedro',
    age: 35,
    country: 'ES',
    infected: true,
    pet: 'Troski'
  },
  {
    name: 'Elisabeth',
    age: 14,
    country: 'UK',
    infected: true,
    pet: 'Firulais'
  },
  {
    name: 'Pablo',
    age: 25,
    country: 'ES',
    infected: false,
    pet: 'Berritxu'
  },
  {
    name: 'Angela',
    age: 18,
    country: 'DE',
    infected: false,
    pet: 'Noodle'
  },
  {
    name: 'Boris',
    age: 50,
    country: 'UK',
    infected: true,
    pet: 'Leon'
  },
  {
    name: 'Donald',
    age: 69,
    country: 'US',
    infected: false,
    pet: 'Pence'
  },
  {
    name: 'Pepito',
    age: 36,
    country: 'ES',
    infected: false,
    pet: 'Carbón'
  }
];

/**
 *  =======================
 *  ··· M A S C O T A S ···
 *  =======================
 */
const pets = [
  {
    name: 'Troski',
    animal: 'perro'
  },
  {
    name: 'Firulais',
    animal: 'perro'
  },
  {
    name: 'Berritxu',
    animal: 'loro'
  },
  {
    name: 'Noodle',
    animal: 'araña'
  },
  {
    name: 'Leon',
    animal: 'gato'
  },
  {
    name: 'Pence',
    animal: 'perro'
  },
  {
    name: 'Carbón',
    animal: 'gato'
  }
];

/**
 *  =======================
 *  ··· A N I M A L E S ···
 *  =======================
 */
const animals = [
  {
    name: 'perro',
    legs: 4
  },
  {
    name: 'araña',
    legs: 8
  },
  {
    name: 'gato',
    legs: 4
  },
  {
    name: 'loro',
    legs: 2
  },
  {
    name: 'gallina',
    legs: 2
  }
];

/**
 *  ===================
 *  ··· P A Í S E S ···
 *  ===================
 */
const countries = [
  {
    code: 'CN',
    name: 'China',
    population: 1439,
    infected: 81999
  },
  {
    code: 'US',
    name: 'Estados Unidos',
    population: 331,
    infected: 112468
  },
  {
    code: 'DE',
    name: 'Alemania',
    population: 83,
    infected: 56202
  },
  {
    code: 'ES',
    name: 'España',
    population: 46,
    infected: 72248
  },
  {
    code: 'UK',
    name: 'Reino Unido',
    population: 67,
    infected: 17301
  }
];

/**
 *  ###########################
 *  ## E J E R C I C I O   1 ##
 *  ###########################
 * 
 *  Número total de infectados del array de personas.
 * 
 */

const totalInfectedInPersons = persons.filter((person) => person.infected).length;

/**
 *  ###########################
 *  ## E J E R C I C I O   2 ##
 *  ###########################
 * 
 *  Número total de sanos.
 * 
 */

const totalHealthyInPersons = persons.filter((person) => !person.infected).length;

/**
 *  ###########################
 *  ## E J E R C I C I O   3 ##
 *  ###########################
 * 
 *  Número total de infectados en el array de países.
 * 
 */

const totalInfectedInCountries = countries.reduce((acc, country) => {
  return acc + country.infected;
}, 0);

/**
 *  ###########################
 *  ## E J E R C I C I O   4 ##
 *  ###########################
 *  
 *  País con más infectados.
 * 
 */

const mostInfectedCountry = countries.reduce((acc, country) => {
  if(country.infected > acc.infected) {
    acc = country;
  }
  return acc;
});

/**
 *  ###########################
 *  ## E J E R C I C I O   5 ##
 *  ###########################
 * 
 *  Array con el nombre de todas las mascotas.
 * 
 */

const petsName = pets.map((pet) => pet.name);

/**
 *  ###########################
 *  ## E J E R C I C I O   6 ##
 *  ###########################
 * 
 *  Array con las personas infectadas del array de personas.
 * 
 */

const infectedPersons = persons.filter((person) => person.infected);

/**
 *  ###########################
 *  ## E J E R C I C I O   7 ##
 *  ###########################
 * 
 *  Array de españoles con perro. 
 * 
 */

const spanishWithDog = persons.filter((person) => {
  return pets.find((pet) => (person.pet === pet.name) && (pet.animal === 'perro') && (person.country === 'ES'));
});

/**
 *  ###########################
 *  ## E J E R C I C I O   8 ##
 *  ###########################
 * 
 *  Array con las personas. A mayores, este array debe incluír el objeto con los datos de su mascota
 * 
 */

const personsAndPets= persons.map((person) => {
  return {
    ...person,
    pet: pets.find((pet) => pet.name === person.pet)
  }
});

/**
 *  ###########################
 *  ## E J E R C I C I O   9 ##
 *  ###########################
 * 
 *  A partir del array de personas deduce el animal que tienen más personas como mascota.
 * 
 */

const objectWithAnimals = persons.map((person) => {
  return pets.find((pet) => person.pet === pet.name)
}).map((pet) => pet.animal).reduce((acc, pet) => {
  // Esto es como el ejercicio de la cesta de frutas.
  !acc[pet] ? acc[pet] = 1 : acc[pet]++; // Operador ternario --> condición ? true : false;
  return acc;
}, {});

// Función a la que le pasamos un objeto con el nombre de los animales
// y el nº de veces que se repiten.
const mostCommonPet = (animalsObject) => {

  // Combinando "Math.max" y el método "Object.values()" obtenemos el mayor nº 
  // de veces que se repite un animal. Recordad que "Object.values()" devuelve 
  // un array con los valores del objeto.
  const maxValue = Math.max(...Object.values(animalsObject));

  // Creamos un array vacío donde iremos pusheando los animales que más se repitan.
  const animalsArray = [];
  
  // Recorremos un array con las propiedades del objeto. Para eso nos valemos del
  // método "Object.keys()". 
  for (const prop of Object.keys(animalsObject)) {
    // Si el valor de la propiedad es igual que "maxValue" quiere decir que ese 
    // animal es el que más se repite. Puede ocurrir que haya 3 perros y 3 gatos. 
    // En ese caso pushearíamos al perro y al gato. Debemos utilizar la notación
    // por corchetes porque "prop" es un string ("perro", "gato", "loro"...).
    if(animalsObject[prop] === maxValue) {
      // Metemos el animal en el array.
      animalsArray.push(prop);
    }
  }

  return animalsArray;

}

console.log(mostCommonPet(objectWithAnimals));

/**
 *  #############################
 *  ## E J E R C I C I O   1 0 ##
 *  #############################
 * 
 *  Número total de patas de las mascotas de las personas.
 * 
 */

const petsLegs = pets.reduce((acc, pet) => {
  animals.find((animal) => {
    // Si el tipo de mascota es igual al tipo de animal.
    if (animal.name === pet.animal) {
      // Sumamos las patas de dicho animal.
      acc += animal.legs;
    }
  });
  return acc;
}, 0); 

/**
 *  #############################
 *  ## E J E R C I C I O   1 1 ##
 *  #############################
 * 
 *  Array con las personas que tienen animales de 4 patas
 * 
 */

// Filtro los animales de 4 patas.
const fourLeggedPets = pets.filter((pet) => {
  return animals.find((animal) => (pet.animal === animal.name) && (animal.legs === 4));
})

// Tomando como referencia el array filtrado aplico un filter sobre las personas
// y devuelvo las personas con animales de 4 patas.
const personsWithFourLeggedPets = persons.filter((person) => {
  return fourLeggedPets.find((pet) => person.pet === pet.name);
})

/**
 *  #############################
 *  ## E J E R C I C I O   1 2 ##
 *  #############################
 * 
 *  A partir del string 'España' obtener un array de personas no infectadas de ese país. 
 * 
 */

const healthySpanish = persons.filter((persons) => {
  return countries.find((country) => country.code === persons.country && country.name === 'España');
})

/**
 *  #############################
 *  ## E J E R C I C I O   1 3 ##
 *  #############################
 * 
 *  Array de países que tienen personas con loros como mascota. 
 * 
 */

const personsWithParrots = persons.filter((valuePerson) => {
  return pets.find((valuePet) => valuePet.animal === 'loro' && valuePet.name === valuePerson.pet);
});

const countriesWithParrots = countries.filter((valueCountry) => {
  return personsWithParrots.find((personValue) => valueCountry.code === personValue.country);
});

/**
 *  #############################
 *  ## E J E R C I C I O   1 4 ##
 *  #############################
 * 
 *  Número de infectados totales (en el array de países) de los países con mascotas de ocho patas.
 * 
 */

// Obtenemos un array con las personas que tienen mascotas de 8 patas.
const personsWithEightLeggedAnimals = persons.filter((valuePerson) => {
  return pets.find((valuePet) => {
    return animals.find((valueAnimal) => {
      return valueAnimal.legs === 8 && valuePet.animal === valueAnimal.name && valuePerson.pet === valuePet.name;
    });
  });
});


// Obtenemos el nº total de infectados de los países con animales de 8 patas.
const totalInfectedWithEightLeggedAnimals_1 = countries.reduce((acc, valueCountry) => {
  personsWithEightLeggedAnimals.find((personValue) => {
    if(personValue.country === valueCountry.code) {
      acc += valueCountry.infected;
    }
  })
  return acc;
}, 0);

/**
 *  #############################
 *  ## E J E R C I C I O   1 4 ##
 *  #############################
 * 
 *  En esta ocasión hemos realizado el ejercicio anterior en un solo paso.
 * 
 */

const totalInfectedWithEightLeggedAnimals_2 = countries.reduce((acc, valueCountry) => {
  persons.find((valuePerson) => {
    pets.find((valuePet) => {
      animals.find((valueAnimal) => {
        if (valueAnimal.legs === 8 && valuePet.animal === valueAnimal.name && valuePerson.pet === valuePet.name && valuePerson.country === valueCountry.code) {
          acc += valueCountry.infected;
        }
      });
    });
  });
  return acc;
}, 0);


