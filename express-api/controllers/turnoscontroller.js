import pool from "../config/db.js";

const getEspecialidades = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM especialidades'); 
        res.json(rows);
    } catch (error) {
        console.error("Error al obtener especialidades:", error);
        res.status(500).send('Error al obtener especialidades');
    }
};


const getHorariosDisponibles = async (req, res) => {
    const { especialidadId, dia } = req.query;
  
    try {
      const horarios = await db.horarios.findAll({
        where: {
          especialidad_id: especialidadId,
          dia,
          estado: "disponible",
        },
        attributes: ["id", "hora"],
      });
  
      if (horarios.length > 0) {
        res.json(horarios);
      } else {
        res.status(404).json({ message: "No hay horarios disponibles." });
      }
    } catch (error) {
      res.status(500).json({ message: "Error al cargar los horarios." });
    }
  };
  
  const crearTurno = async (req, res) => {
    const { nombre, apellido, dni, telefono, email, especialidadId, horarioId, fecha } = req.body;
  
    try {
      const turno = await db.turnos.create({
        nombre,
        apellido,
        dni,
        telefono,
        email,
        especialidad_id: especialidadId,
        horario_id: horarioId,
        fecha,
      });
  
      await db.horarios.update(
        { estado: "ocupado" },
        { where: { id: horarioId } }
      );
  
      res.status(201).json(turno);
    } catch (error) {
      res.status(500).json({ message: "Error al crear el turno." });
    }
  };
  

// Obtener todos los turnos
export const getTurnos = async (req, res) => {
    try {
        const [turnos] = await pool.query(
            'SELECT t.id, p.nombre AS paciente, m.nombre AS medico, e.nombre AS especialidad, t.fecha, t.hora, t.estado ' +
            'FROM turnos t ' +
            'JOIN pacientes p ON t.paciente_id = p.id ' +
            'JOIN medicos m ON t.medico_id = m.id ' +
            'JOIN especialidades e ON m.especialidad_id = e.id'
        );
        res.json(turnos);
    } catch (error) {
        console.error("Error al obtener los turnos:", error);
        res.status(500).json({ error: "Error al obtener los turnos" });
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

export { getEspecialidades, getHorariosDisponibles  ,crearTurno };
