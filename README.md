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
