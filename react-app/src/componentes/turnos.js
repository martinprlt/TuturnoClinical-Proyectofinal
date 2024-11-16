import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Turnos = () => {
  // Estado para los turnos existentes y el error
  const [turnos, setTurnos] = useState([]); 
  const [error, setError] = useState(null);

  // Estado para el formulario
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    dni: '',
    especialidad: '',
    horario: ''
  });

  // Cargar turnos existentes
  useEffect(() => {
    const fetchTurnos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/turnos');
        setTurnos(response.data);
      } catch (error) {
        console.error("Error fetching turnos:", error);
        setError("No se pudieron cargar los turnos.");
      }
    };

    fetchTurnos();
  }, []);

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Enviar el formulario para crear un nuevo turno
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/turnos', formData);
      alert('Turno solicitado con éxito');
      setFormData({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        dni: '',
        especialidad: '',
        horario: ''
      });
    } catch (error) {
      console.error("Error al solicitar el turno:", error);
      alert('Hubo un problema al solicitar el turno');
    }
  };

  return (
    <div>
      <h1>Solicitar Turno</h1>

      {/* Formulario de solicitud de turno */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="dni">DNI</label>
          <input
            type="text"
            id="dni"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="especialidad">Especialidad Deseada</label>
          <input
            type="text"
            id="especialidad"
            name="especialidad"
            value={formData.especialidad}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="horario">Horario Preferido</label>
          <input
            type="text"
            id="horario"
            name="horario"
            value={formData.horario}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn">Solicitar Turno</button>
      </form>

      {/* Mostrar error si ocurre */}
      {error && <p>{error}</p>}

      {/* Tabla de turnos existentes */}
      <h2>Lista de Turnos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Paciente ID</th>
            <th>Médico ID</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {turnos.length > 0 ? (
            turnos.map((turno) => (
              <tr key={turno.id}>
                <td>{turno.id}</td>
                <td>{turno.paciente_id}</td>
                <td>{turno.medico_id}</td>
                <td>{new Date(turno.fecha).toLocaleDateString()}</td>
                <td>{turno.hora}</td>
                <td>{turno.estado}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No hay turnos disponibles.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Turnos;
