# AdoptMe - Pet Adoption Backend

AdoptMe es una aplicación backend desarrollada para la gestión de adopciones de mascotas. Proporciona endpoints para crear, listar y manejar usuarios, mascotas y datos de adopciones. Incluye funcionalidades de mocking para generar datos de prueba.

## Características

- **Gestión de Usuarios y Mascotas:** CRUD de usuarios y mascotas.
- **Mocking de datos:** Endpoints para generar datos falsos de usuarios y mascotas usando Faker.
- **Autenticación:** Soporte para autenticación usando JWT.
- **Encriptación de contraseñas:** Las contraseñas de los usuarios están encriptadas con bcrypt.
- **Carga de archivos:** Permite la carga de archivos usando multer.

## Requisitos

- **Node.js** 14.x o superior
- **MongoDB** (una instancia local o MongoDB Atlas)
- Dependencias manejadas con npm.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/[tu-usuario]/adoptme-backend.git

2. Navega a la carpeta del proyecto:
 ```bash
 cd adoptme-backend

3. Instala las dependencias:
 ```bash
npm install

4. Configura las variables de entorno:

Crea un archivo .env en la raíz del proyecto y define las variables necesarias, como la URL de MongoDB y las configuraciones de JWT. Puedes basarte en los archivos .env.dev y .env.prod de ejemplo.

NODE_ENV=development
MONGO_URL=mongodb+srv://[usuario]:[contraseña]@clustercito.zmhrugo.mongodb.net/college?retryWrites=true&w=majority&appName=Clustercito
PORT=8080
BCRYPT_SALT_ROUNDS=10
SECRET_KEY=miSuperSecretoParaAdoptme
ADMIN_PASSWORD=myadminpassword
JWT_COOKIE=tokencito
JWT_SECRET=rq0tga4T1xS5y8g0S/RzMs+bvzryhO6IREA51HfA5vM


5. Inicia el servidor:

npm start



El servidor debería estar corriendo en http://localhost:8080.

Endpoints
Usuarios
POST /api/users: Crear un nuevo usuario.
GET /api/users: Listar todos los usuarios.
GET /api/users/:id: Obtener un usuario específico por ID.
PUT /api/users/:id: Actualizar un usuario específico.
DELETE /api/users/:id: Eliminar un usuario específico.
Mascotas
POST /api/pets: Crear una nueva mascota.
GET /api/pets: Listar todas las mascotas.
GET /api/pets/:id: Obtener una mascota específica por ID.
PUT /api/pets/:id: Actualizar una mascota específica.
DELETE /api/pets/:id: Eliminar una mascota específica.
Mocking
GET /api/mocks/mockingpets: Generar 100 mascotas de prueba.
GET /api/mocks/mockingusers: Generar 50 usuarios de prueba.
POST /api/mocks/generateData: Generar e insertar usuarios y mascotas en la base de datos según los parámetros enviados.
Autenticación
POST /api/auth/login: Iniciar sesión y obtener un token JWT.