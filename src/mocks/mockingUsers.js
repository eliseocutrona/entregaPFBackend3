import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';

export const generateUsers = (numUsers) => {
    const users = [];

    // Definir la contraseña por defecto y encriptarla fuera del bucle para evitar múltiples cálculos
    const defaultPassword = 'coder123';
    const hashedPassword = bcrypt.hashSync(defaultPassword, 10);

    for (let i = 0; i < numUsers; i++) {
        const user = {
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            password: hashedPassword, // Usar la contraseña encriptada
            role: faker.helpers.arrayElement(['user', 'admin']),
            pets: [], // Inicialmente sin mascotas
        };

        users.push(user);
    }

    return users;
};
