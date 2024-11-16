import express from 'express';
import turnosroutes from '../routes/turnosroutes.js';

const app = express();
app.use(express.json());

app.use('/api/turnos', turnosroutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
