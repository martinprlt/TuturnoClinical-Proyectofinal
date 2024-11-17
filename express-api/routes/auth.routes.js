// auth.routes.js
import express from 'express';  // Asegúrate de importar express

const router = express.Router();  // Ahora express está definido

// Rutas
import { login } from '../controllers/auth.controller.js'; // Importar el controlador login

router.post('/login', login); // Ruta para el login

export default router; // Exportar el router
