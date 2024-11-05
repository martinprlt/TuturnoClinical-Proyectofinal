import express from 'express';
import cors from 'cors';
import turnosRoutes from './routes/turnosroutes.js'; 
import auth from './routes/auth.routes.js'; 



const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/turnos', turnosRoutes);  
app.use('/auth/login', auth);  


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
