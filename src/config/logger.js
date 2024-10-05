import winston from 'winston';

// Niveles de log
const levels = {
    fatal: 0,
    error: 1,
    warning: 2,
    info: 3,
    http: 4,
    debug: 5,
};

// Logger de desarrollo
const devLogger = winston.createLogger({
    levels,
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
    ),
    transports: [
        new winston.transports.Console({ level: 'debug' })
    ],
});

// Logger de producción
const prodLogger = winston.createLogger({
    levels,
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({ level: 'info' }),
        new winston.transports.File({ filename: 'errors.log', level: 'error' })
    ],
});

// Exportar el logger de acuerdo al entorno
export const logger = process.env.NODE_ENV === 'production' ? prodLogger : devLogger;
