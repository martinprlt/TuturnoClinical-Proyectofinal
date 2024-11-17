import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TurnoList = () => {
  const [turnos, setTurnos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTurnos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/turnos');
        setTurnos(response.data);
      } catch (error) {
        setError('No se pudieron cargar los turnos.');
      }
    };
    fetchTurnos();
  }, []);

  return (
    <div>
      <h2>Listado de Turnos</h2>
      {error && <p>{error}</p>}
      <ul>
        {turnos.map((turno) => (
          <li key={turno.id}>
            {turno.nombre} {turno.apellido} - {turno.fecha} - {turno.horario}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TurnoList;
