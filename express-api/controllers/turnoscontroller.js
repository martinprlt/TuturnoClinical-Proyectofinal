import pool from '../config/db.js'; // Asegúrate de usar tu pool de conexiones
import mysql from 'mysql2/promise';

// Horarios posibles de 8:00 AM a 16:00 PM
const horariosPosibles = [
  { id: 1, hora: "08:00" },
  { id: 2, hora: "09:00" },
  { id: 3, hora: "10:00" },
  { id: 4, hora: "11:00" },
  { id: 5, hora: "12:00" },
  { id: 6, hora: "13:00" },
  { id: 7, hora: "14:00" },
  { id: 8, hora: "15:00" },
  { id: 9, hora: "16:00" }
];

 const getEspecialidades = async (req, res) => {
  try {
      const [rows] = await pool.execute('SELECT * FROM especialidades');
      res.json(rows);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error en la base de datos' });
  }
};

const getHorariosDisponibles = async (req, res) => {
  const { especialidad_id, dia } = req.query;
  
  if (!especialidad_id) {
      return res.status(400).json({ error: "El ID de especialidad es necesario." });
  }

  try {
      const [horarios] = await pool.query('CALL obtener_horarios_disponibles(?, ?)', [especialidad_id, dia]);
      res.json(horarios);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al obtener los horarios disponibles." });
  }
};

const asignarTurno = async (req, res) => {
  const { paciente_id, medico_id, fecha, hora } = req.body;

  try {
    const [rows] = await pool.query(
      'CALL AsignarTurno(?, ?, ?, ?)', 
      [paciente_id, medico_id, fecha, hora]
    );

    if (rows && rows[0].mensaje) {
      res.json({ mensaje: rows[0].mensaje });
    } else {
      res.status(400).json({ mensaje: "No se pudo asignar el turno." });
    }
  } catch (error) {
    console.error("Error al asignar el turno:", error);
    res.status(500).json({ mensaje: "Error al asignar el turno." });
  }
};

// Crear un turno
const crearTurno = async (req, res) => {
  const { pacienteId, medicoId, fecha, hora } = req.body;

  try {
    // Ejecutar el procedimiento almacenado
    const [result] = await pool.query(
      'CALL asignar_turno(?, ?, ?, ?, @mensaje); SELECT @mensaje AS mensaje;', 
      [pacienteId, medicoId, fecha, hora]
    );

    // Extraemos el mensaje del resultado
    const mensaje = result[1][0].mensaje;

    // Responder según el mensaje
    if (mensaje === 'Turno asignado exitosamente.') {
      res.status(201).json({ message: mensaje });
    } else {
      res.status(400).json({ error: mensaje });
    }
  } catch (error) {
    console.error("Error al crear el turno:", error);
    res.status(500).json({ message: "Error al crear el turno." });
  }
};

// Obtener un turno por ID
export const getTurnoById = async (req, res) => {
  const { id } = req.params;
  try {
    const [turno] = await pool.query("SELECT * FROM turnos WHERE id = ?", [id]);
    if (turno.length === 0) {
      return res.status(404).json({ message: "Turno no encontrado" });
    }
    res.json(turno[0]);
  } catch (error) {
    console.error("Error al obtener el turno:", error);
    res.status(500).json({ message: "Error al obtener el turno" });
  }
};

// Actualizar un turno
export const actualizarTurno = async (req, res) => {
  const { id } = req.params;
  const { estado } = req.body;
  try {
    const [result] = await pool.query(
      "UPDATE turnos SET estado = ? WHERE id = ?",
      [estado, id]
    );
    if (result.affectedRows > 0) {
      res.json({ message: "Turno actualizado con éxito" });
    } else {
      res.status(404).json({ error: "Turno no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar el turno:", error);
    res.status(500).json({ error: "Error al actualizar el turno" });
  }
};

// Eliminar un turno
export const eliminarTurno = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query("DELETE FROM turnos WHERE id = ?", [id]);
    if (result.affectedRows > 0) {
      res.json({ message: "Turno eliminado con éxito" });
    } else {
      res.status(404).json({ error: "Turno no encontrado" });
    }
  } catch (error) {
    console.error("Error al eliminar el turno:", error);
    res.status(500).json({ error: "Error al eliminar el turno" });
  }
};

export { getEspecialidades, getHorariosDisponibles, crearTurno, asignarTurno };
