import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import mocksRouter from './routes/mocks.router.js';
import errorHandler from './middlewares/errorHandler.js';

import __dirname from './utils.js';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import config from './config/config.js';

const app = express();
const PORT = config.app.PORT;

// Verificar el valor de la URL de MongoDB
console.log('MongoDB URL:', config.mongo.URL);

// Conectar a MongoDB con manejo de errores
mongoose.connect(config.mongo.URL)
    .then(() => console.log('Conexión exitosa a MongoDB'))
    .catch(err => console.error('Error de conexión a MongoDB:', err));

const server = app.listen(PORT, () => console.log(`Listening on ${PORT}`));

app.use(express.static(`${__dirname}/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(errorHandler);

app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/sessions', sessionsRouter);
app.use('/api/mocks', mocksRouter);


// Ruta de prueba para logger
app.get('/loggerTest', (req, res) => {
    logger.debug('Este es un log de nivel debug');
    logger.http('Este es un log de nivel http');
    logger.info('Este es un log de nivel info');
    logger.warning('Este es un log de nivel warning');
    logger.error('Este es un log de nivel error');
    logger.fatal('Este es un log de nivel fatal');
    res.send('Logs enviados, verifica la consola y el archivo errors.log');
});