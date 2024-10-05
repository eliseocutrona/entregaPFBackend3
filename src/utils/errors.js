const errorDictionary = {
    USER_REGISTRATION_FAILED: {
        message: 'Error al registrar el usuario',
        code: 'USR_01',
        status: 400,
    },
    PET_CREATION_FAILED: {
        message: 'Error al crear la mascota',
        code: 'PET_01',
        status: 400,
    },
    DATABASE_ERROR: {
        message: 'Error en la base de datos',
        code: 'DB_01',
        status: 500,
    },
};

export const createError = (errorType) => {
    const error = errorDictionary[errorType];
    return {
        message: error.message,
        code: error.code,
        status: error.status,
    };
};
