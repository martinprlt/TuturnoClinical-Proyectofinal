const db = require('../config/db.js'); 

const especialidades = ['Ginecologia', 'Pediatria', 'Clinica Medica','Cardiologia','Odontología']; 
const fechaInicio = new Date('2024-11-20'); // Fecha inicial
const fechaFin = new Date('2024-11-30'); // Fecha final

const generarHorarios = async () => {
  const dias = ["lunes", "martes", "miércoles", "jueves", "viernes"]; // Días hábiles
  const especialidades = await db.especialidades.findAll(); // Obtener especialidades desde la base de datos

  for (const especialidad of especialidades) {
    for (const dia of dias) {
      for (let hora = 8; hora < 16; hora++) {
        await db.horarios.create({
          especialidad_id: especialidad.id,
          medico_id: null, 
          dia: dia,
          hora: `${hora}:00:00`,
          estado: "disponible",
        });
      }
    }
  }
  console.log("Horarios generados exitosamente.");



  try {
    for (const horario of horarios) {
      await db.query(
        'INSERT INTO Horarios (especialidad, fecha, horaInicio, horaFin, isDisponible) VALUES (?, ?, ?, ?, ?)',
        [horario.especialidad, horario.fecha, horario.horaInicio, horario.horaFin, horario.isDisponible]
      );
    }
    console.log('Horarios generados exitosamente');
  } catch (err) {
    console.error('Error al generar horarios:', err);
  }

};
generarHorarios();
