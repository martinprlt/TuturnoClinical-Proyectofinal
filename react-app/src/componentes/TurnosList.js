import React, { useEffect, useState } from "react";

const TurnosList = () => {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/turnos')
      .then((response) => response.json())
      .then((data) => setTurnos(data))
      .catch((error) => console.error('Error fetching turnos:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Turnos</h2>
      {turnos.length === 0 ? (
        <p>No hay turnos disponibles.</p>
      ) : (
        <ul>
          {turnos.map((turno, index) => (
            <li key={index}>{turno.nombre} - {turno.fecha}</li> 
          ))}
        </ul>
      )}
    </div>
  );
};

export default TurnosList;
