<<<<<<< HEAD
1. Abre la terminal o consola de comandos:
Dependiendo de tu sistema operativo, puedes usar Git Bash, la terminal de Windows o la terminal de tu IDE.

2. Obtén la URL del repositorio:
Asegúrate de tener la URL del repositorio en GitHub. Para obtenerla:

Ve a tu repositorio en GitHub.
Haz clic en el botón verde que dice Code.
Copia la URL en formato HTTPS (por ejemplo, https://github.com/tu-usuario/TuturnoClinical-Proyectofinal.git).
3. Clona el repositorio:
En la terminal, usa el siguiente comando para clonar el repositorio: git clone https://github.com/tu-usuario/TuturnoClinical-Proyectofinal.git
Asegúrate de reemplazar la URL por la correcta de tu repositorio.

Esto creará una carpeta llamada TuturnoClinical-Proyectofinal con todos los archivos de tu repositorio en tu computadora.

4. Entra a la carpeta del repositorio:
Después de clonar el repositorio, cambia al directorio recién creado: cd TuturnoClinical-Proyectofinal

6. Verifica que estás en la rama master:
Una vez dentro del repositorio, ejecuta:
git branch
Deberías ver un asterisco (*) al lado de master, lo que indica que estás en esa rama.

Si no estás en la rama master, puedes cambiar a ella usando:git checkout master

*2*. Instala las dependencias:
Para instalar las dependencias del proyecto backend (Express):

Navega a la carpeta express-api:cd express-api
Una vez dentro de la carpeta express-api, ejecuta:
npm install
Esto instalará todas las dependencias necesarias que están especificadas en el archivo package.json.

Para instalar las dependencias del proyecto frontend (React):

Navega a la carpeta react-app (si la tienes):
cd ../react-app
Luego, ejecuta:
npm install

*3*. Ejecuta el servidor backend (Express):
Dentro de la carpeta express-api, puedes ejecutar el servidor con el siguiente comando:
npm start
Ejecuta la aplicación frontend (React):
Dentro de la carpeta react-app, ejecuta:npm start
Ahora podrás ver tu aplicación de React en tu navegador.







=======
# TuturnoClinical - Proyecto Final: El objetivo de este trabajo práctico final es desarrollar una aplicación web completa utilizando el
stack MERN (MySQL, Express, React, Node.js), que implemente una solución a una problemática real.

Este es el proyecto final para **TuturnoClinical**, una aplicación desarrollada con un stack **MERN** (MySQL, Express, React y Node.js). 
La aplicación está dividida en frontend y backend, con React para la interfaz de usuario y Express para la API en el servidor. El proyecto
permite gestionar y visualizar datos clínicos de pacientes.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:


## Requisitos Previos

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [Xampp - MySQL de MariaDB]([https://www.mongodb.com/](https://www.apachefriends.org/es/index.html)) (si usas una base de datos en la nube, también sirve)

## Configuración

### 1. Clona el repositorio

Clona este repositorio en tu máquina local usando:

git clone https://github.com/tu-usuario/TuturnoClinical-Proyectofinal.git
cd TuturnoClinical-Proyectofinal

2. Instala las dependencias
Frontend (React)

  cd react-app
  npm install

Backend (Express)

  cd ../express-api
  npm install

Cómo Iniciar el Proyecto
1. Inicia el Backend (Express)
Desde la carpeta express-api, ejecuta:
  npm start
  Esto iniciará el servidor en el puerto especificado en el archivo .env (por defecto, en http://localhost:5000).


2. Inicia el Frontend (React)
En otra terminal, ve a la carpeta react-app y ejecuta:
  npm start
  Esto abrirá la aplicación en el navegador en http://localhost:3000.

Tecnologías Utilizadas
Frontend: React, CSS
Backend: Express, MongoDB, Node.js
Autenticación: JSON Web Tokens (JWT)

Funcionalidades
Frontend: Interfaces de usuario para visualizar y gestionar datos de pacientes.
Backend: API REST para manejar datos clínicos y autenticación de usuarios.
>>>>>>> c9e578689ee72a76f8ed9471176f1b1eaa4fd1bd
