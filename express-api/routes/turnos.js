const express = require('express');
const router = express.Router();
const pool = require('../db/connection');

// Obtener todos los turnos
router.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query(
            `SELECT t.id, p.nombre AS paciente, m.nombre AS medico, e.nombre AS especialidad, t.fecha, t.hora, t.estado
             FROM turnos t
             INNER JOIN pacientes p ON t.paciente_id = p.id
             INNER JOIN medicos m ON t.medico_id = m.id
             INNER JOIN especialidades e ON m.especialidad_id = e.id`
        );
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener los turnos' });
    }
});

// Crear un nuevo turno
router.post('/', async (req, res) => {
    const { paciente_id, medico_id, fecha, hora } = req.body;
    try {
        const [result] = await pool.query(
            'INSERT INTO turnos (paciente_id, medico_id, fecha, hora, estado) VALUES (?, ?, ?, ?, ?)',
            [paciente_id, medico_id, fecha, hora, 'pendiente']
        );
        res.status(201).json({ message: 'Turno creado exitosamente', turnoId: result.insertId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al crear el turno' });
    }
});

// Actualizar un turno
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { fecha, hora, estado } = req.body;
    try {
        const [result] = await pool.query(
            'UPDATE turnos SET fecha = ?, hora = ?, estado = ? WHERE id = ?',
            [fecha, hora, estado, id]
        );
        res.json({ message: 'Turno actualizado exitosamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al actualizar el turno' });
    }
});

// Eliminar un turno
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM turnos WHERE id = ?', [id]);
        res.json({ message: 'Turno eliminado exitosamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al eliminar el turno' });
    }
});

module.exports = router;
