import pool from '../config/db.js';

export const turnosController = {
    getTurnos: async (req, res) => {
        try {
            const [rows] = await pool.query(`
                SELECT t.id, p.nombre AS paciente, m.nombre AS medico, e.nombre AS especialidad, t.fecha, t.hora, t.estado
                FROM turnos t
                INNER JOIN pacientes p ON t.paciente_id = p.id
                INNER JOIN medicos m ON t.medico_id = m.id
                INNER JOIN especialidades e ON m.especialidad_id = e.id
            `);
            res.json(rows);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Error al obtener los turnos' });
        }
    },

    getTurnoById: async (req, res) => {
        const { id } = req.params;
        try {
            const [rows] = await pool.query(`
                SELECT t.id, p.nombre AS paciente, m.nombre AS medico, e.nombre AS especialidad, t.fecha, t.hora, t.estado
                FROM turnos t
                INNER JOIN pacientes p ON t.paciente_id = p.id
                INNER JOIN medicos m ON t.medico_id = m.id
                INNER JOIN especialidades e ON m.especialidad_id = e.id
                WHERE t.id = ?
            `, [id]);
            if (rows.length === 0) return res.status(404).json({ error: 'Turno no encontrado' });
            res.json(rows[0]);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Error al obtener el turno' });
        }
    },

    createTurno: async (req, res) => {
        const { paciente_id, medico_id, fecha, hora } = req.body;
    
        try {
            // Llamar al procedimiento almacenado con parámetros
            const [result] = await pool.query(`
                CALL sp_crear_turno(?, ?, ?, ?, @mensaje);
            `, [paciente_id, medico_id, fecha, hora]);
    
            const [[{ mensaje }]] = await pool.query('SELECT @mensaje AS mensaje;');
    
            if (mensaje === 'Turno asignado exitosamente.') {
                res.status(201).json({ message: mensaje });
            } else {
                res.status(400).json({ error: mensaje }); 
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Error al crear el turno' });
        }
    },

    updateTurno: async (req, res) => {
        const { id } = req.params; 
        const { fecha, hora, estado } = req.body; 
        try {
            const [result] = await pool.query(
                `UPDATE turnos SET fecha = ?, hora = ?, estado = ? WHERE id = ?`,
                [fecha, hora, estado, id]
            );
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: "Turno no encontrado" });
            }
            res.json({ message: "Turno actualizado correctamente" });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Error al actualizar el turno" });
        }
    },
    
    deleteTurno: async (req, res) => {
        const { id } = req.params;
        try {
            const [result] = await pool.query(`DELETE FROM turnos WHERE id = ?`, [id]);
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: "Turno no encontrado" });
            }
            res.json({ message: "Turno eliminado correctamente" });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Error al eliminar el turno" });
        }
    },
    
};
