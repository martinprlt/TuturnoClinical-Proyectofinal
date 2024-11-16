import express from 'express';

const router = express.Router();

// Ejemplo de ruta
router.post('/', (req, res) => {
  res.send('Login route funcionando');
});

export default router;
