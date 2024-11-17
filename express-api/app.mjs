import express from 'express';
import cors from 'cors';  
import pool from './config/db.js';  
import turnosRoutes from './routes/turnosroutes.js'; 
import { getHorariosDisponibles } from './controllers/turnoscontroller.js';
import { getEspecialidades } from './controllers/turnoscontroller.js';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/turnos', turnosRoutes);

app.get('/api/especialidades', getEspecialidades);
app.get('/api/horarios', getHorariosDisponibles);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
