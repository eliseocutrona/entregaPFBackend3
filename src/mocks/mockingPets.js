import { faker } from '@faker-js/faker';

export const generatePets = (numPets) => {
    const pets = [];

    for (let i = 0; i < numPets; i++) {
        // Selección aleatoria de la especie
        const specie = faker.helpers.arrayElement(['dog', 'cat', 'rabbit', 'bird']);
        
        // Generar nombre según la especie
        const name = (() => {
            switch (specie) {
                case 'dog': return faker.animal.dog();
                case 'cat': return faker.animal.cat();
                case 'rabbit': return faker.animal.rabbit();
                case 'bird': return faker.animal.bird();
                default: return 'Unknown'; // En caso de que se agreguen más especies
            }
        })();

        // Crear objeto mascota
        const pet = {
            name,
            specie,
            adopted: false,   // Inicialmente no adoptado
            owner: null,      // Sin dueño inicialmente
        };

        pets.push(pet);
    }

    console.log('Generated pets:', pets);
    return pets;
};
