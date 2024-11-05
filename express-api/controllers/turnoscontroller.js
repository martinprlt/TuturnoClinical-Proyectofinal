import pool from "../../express-api/config/db.js";

const getTurnos = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Turnos");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTurnoById = async (req, res) => {
  const { id } = req.params;
  try {
    const [row] = await pool.query("SELECT * FROM Turnos WHERE id = ?", [id]);
    if (row.length === 1) {
      res.json(row[0]);
    } else {
      res.status(404).json({ message: "Turno no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTurno = async (req, res) => {
  const { paciente_id, medico_id, fecha, hora } = req.body; 
  try {
    const [result] = await pool.query(
      "INSERT INTO Turnos (paciente_id, medico_id, fecha, hora) VALUES (?, ?, ?, ?)",
      [paciente_id, medico_id, fecha, hora]
    );
    res.json({ id: result.insertId, mensaje: "Turno creado con éxito." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const updateTurno = async (req, res) => {
  const { id } = req.params;
  const { paciente_id, medico_id, fecha, hora, estado } = req.body;
  try {
    const [result] = await pool.query(
      "UPDATE Turnos SET paciente_id = ?, medico_id = ?, fecha = ?, hora = ?, estado = ? WHERE id = ?",
      [paciente_id, medico_id, fecha, hora, estado, id]
    );
    if (result.affectedRows === 1) {
      res.json({ message: "Turno actualizado" });
    } else {
      res.status(404).json({ message: "Turno no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTurno = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query("DELETE FROM Turnos WHERE id = ?", [id]);
    if (result.affectedRows === 1) {
      res.json({ message: "Turno eliminado" });
    } else {
      res.status(404).json({ message: "Turno no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const turnosController = {
  getTurnos,
  getTurnoById,
  createTurno,
  updateTurno,
  deleteTurno,
};
