import express from 'express';
import turnosRoutes from './routes/turnosroutes.js';
import cors from 'cors';


const app = express();

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());

// Montar rutas
app.use('/api/turnos', turnosRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
