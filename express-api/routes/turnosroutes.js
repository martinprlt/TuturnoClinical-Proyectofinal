import express from 'express';
import verifyToken from '../middlewares/auth.js';
import { 
    getEspecialidades, 
    getHorariosDisponibles, 
    crearTurno, 
    getTurnoById, 
    actualizarTurno, 
    asignarTurno,
    eliminarTurno 
} from "../controllers/turnoscontroller.js"; 

const router = express.Router();

router.get('/especialidades', getEspecialidades);
router.post('/asignar-turno', asignarTurno);
router.get('/horarios', getHorariosDisponibles);
router.post('/turnos', verifyToken,crearTurno);
router.get('/turnos/:id',verifyToken,getTurnoById);
router.put('/turnos/:id', actualizarTurno);
router.delete('/turnos/:id', eliminarTurno);

export default router;
