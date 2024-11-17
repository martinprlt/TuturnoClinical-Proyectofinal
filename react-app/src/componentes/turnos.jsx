import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Turnos = () => {
  const [turnos, setTurnos] = useState([]);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    dni: '',
    especialidad: '',
    horario: ''
  });

  // Obtener lista de turnos existentes
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

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
          <label htmlFor="email">Email</label>
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
          <label htmlFor="especialidad">Especialidad</label>
          <select
            id="especialidad"
            name="especialidad"
            value={formData.especialidad}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar Especialidad</option>
            {/* Lista de especialidades */}
          </select>
        </div>
        <div>
          <label htmlFor="horario">Horario</label>
          <select
            id="horario"
            name="horario"
            value={formData.horario}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar Horario</option>
            {/* Lista de horarios */}
          </select>
        </div>
        <button type="submit">Solicitar</button>
      </form>

      <div>
        <h2>Lista de Turnos</h2>
        {error ? (
          <p>{error}</p>
        ) : (
          <ul>
            {turnos.map(turno => (
              <li key={turno.id}>
                {turno.nombre} - {turno.apellido} - {turno.fecha} - {turno.horario}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Turnos;
