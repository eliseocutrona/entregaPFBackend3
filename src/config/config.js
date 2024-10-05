import { config } from 'dotenv';
import { Command } from 'commander';

const program = new Command();

// Definir el modo requerido con un valor predeterminado
program.requiredOption('-m, --mode <mode>', 'Server mode', 'prod');
program.parse();

const options = program.opts();

// Cargar el archivo .env según el modo
config({
    path: options.mode === 'dev' ? './.env.dev' : './.env.prod',
});

// Verificar si las variables críticas están definidas
if (!process.env.MONGO_URL || !process.env.ADMIN_PASSWORD) {
    throw new Error('Faltan variables de entorno necesarias en el archivo .env');
}

// Exportar las configuraciones
export default {
    app: {
        PORT: process.env.PORT || 8080,
        ADMIN_PWD: process.env.ADMIN_PASSWORD,
    },
    mongo: {
        URL: process.env.MONGO_URL,
    },
};
