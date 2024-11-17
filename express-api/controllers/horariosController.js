const db = require("../config/db.js"); 

const obtenerEspecialidades = async (req, res) => {
  try {
    const especialidades = await db.Especialidad.findAll();
    res.json(especialidades);
  } catch (error) {
    console.error("Error obteniendo especialidades", error);
    res.status(500).json({ error: "Hubo un error al obtener las especialidades" });
  }
};

const obtenerHorarios = async (req, res) => {
  const { especialidadId, dia } = req.query;
  try {
    const horarios = await db.horarios.findAll({
      where: {
        especialidad_id: especialidadId, 
        dia: dia, 
        estado: "disponible", 
      },
      attributes: ["id", "hora"], 
    });

    if (horarios.length > 0) {
      res.json(horarios);
    } else {
      res.status(404).json({ message: "No hay horarios disponibles para esta especialidad y día." });
    }
  } catch (error) {
    console.error("Error obteniendo horarios:", error);
    res.status(500).json({ error: "Hubo un error al obtener los horarios." });
  }
};


module.exports = {
  obtenerEspecialidades,
  obtenerHorarios,
};
