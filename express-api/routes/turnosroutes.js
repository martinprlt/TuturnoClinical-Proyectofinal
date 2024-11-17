import express from 'express';
import { 
    getEspecialidades, 
    getHorariosDisponibles, 
    crearTurno, 
    getTurnoById, 
    actualizarTurno, 
    eliminarTurno 
} from "../controllers/turnoscontroller.js"; 

const router = express.Router();

router.get('/especialidades', getEspecialidades);
router.get('/horarios', getHorariosDisponibles);
router.post('/turnos', crearTurno);
router.get('/turnos/:id', getTurnoById);
router.put('/turnos/:id', actualizarTurno);
router.delete('/turnos/:id', eliminarTurno);

export default router;
