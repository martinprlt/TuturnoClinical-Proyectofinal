import { Router } from 'express';
import { turnosController } from '../../src/controllers/turnoscontroller.js';

const router = Router();

router.get('/', turnosController.getTurnos);
router.get('/:id', turnosController.getTurnoById);
router.post('/', turnosController.createTurno);
router.put('/:id', turnosController.updateTurno);
router.delete('/:id', turnosController.deleteTurno);

export default router;
