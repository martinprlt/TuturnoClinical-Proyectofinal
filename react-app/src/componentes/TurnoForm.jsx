import React, { useState, useEffect } from "react";
import axios from "axios";

const TurnoForm = () => {
  const [especialidades, setEspecialidades] = useState([]);
  const [horarios, setHorarios] = useState([]);
  const [especialidadId, setEspecialidadId] = useState("");
  const [horarioId, setHorarioId] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [loadingEspecialidades, setLoadingEspecialidades] = useState(false);
  const [loadingHorarios, setLoadingHorarios] = useState(false);
  const [error, setError] = useState("");

  // Cargar especialidades al iniciar el componente
  useEffect(() => {
    setLoadingEspecialidades(true);
    axios
      .get("http://localhost:5000/api/especialidades")
      .then((response) => {
        setEspecialidades(response.data);
      })
      .catch(() => {
        setError("Error al cargar las especialidades.");
      })
      .finally(() => setLoadingEspecialidades(false));
  }, []);

  // Cargar horarios disponibles según especialidad y fecha
  useEffect(() => {
    if (especialidadId && fecha) {
      setLoadingHorarios(true);
      const dia = new Date(fecha).toLocaleDateString("es-ES", { weekday: "long" }).toLowerCase();
      console.log("Día:", dia); // Verifica el valor del día
  
      axios
        .get(`http://localhost:5000/api/horarios?especialidadId=${especialidadId}&dia=${dia}`)
        .then((response) => {
          console.log("Horarios recibidos:", response.data); // Verifica los datos
  
          if (response.data.length > 0) {
            setHorarios(response.data);
            setError("");
          } else {
            setHorarios([]);
            setError("No hay horarios disponibles para esta especialidad en esta fecha.");
          }
        })
        .catch(() => {
          setError("Error al cargar los horarios.");
        })
        .finally(() => setLoadingHorarios(false));
    } else {
      setHorarios([]); // Limpiar horarios si no hay especialidad o fecha seleccionada.
      setError("");
    }
  }, [especialidadId, fecha]);
  
  // Enviar el formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (new Date(fecha) < new Date()) {
      alert("La fecha seleccionada no puede estar en el pasado.");
      return;
    }
  
    if (!nombre || !apellido || !dni || !telefono || !email || !especialidadId || !horarioId || !fecha) {
      alert("Por favor, complete todos los campos.");
      return;
    }
  
    const turno = {
      nombre,
      apellido,
      dni,
      telefono,
      email,
      especialidadId,
      horarioId,
      fecha,
    };
  
    try {
      const response = await axios.post("http://localhost:5000/api/turnos", turno);
  
      alert(response.data.message || "Hubo un error al crear el turno.");
  
      if (response.data.message === "Turno asignado exitosamente.") {
        setNombre("");
        setApellido("");
        setDni("");
        setTelefono("");
        setEmail("");
        setEspecialidadId("");
        setHorarioId("");
        setFecha("");
      }
  
    } catch (error) {
      alert("Hubo un error al crear el turno.");
    }
  };
  
  return (
    <div className="container">
      <h2>Solicitar Turno</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}

        {/* Campos del formulario */}
        <div className="form-group">
          <label>Nombre:</label>
          <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Apellido:</label>
          <input type="text" className="form-control" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>DNI:</label>
          <input type="text" className="form-control" value={dni} onChange={(e) => setDni(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Teléfono:</label>
          <input type="text" className="form-control" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        {/* Selección de especialidad */}
        <div className="form-group">
          <label>Especialidad:</label>
          <select
            className="form-control"
            value={especialidadId}
            onChange={(e) => setEspecialidadId(e.target.value)}
            required
          >
            {loadingEspecialidades ? (
              <option value="">Cargando especialidades...</option>
            ) : (
              <option value="">Seleccione especialidad</option>
            )}
            {especialidades.map((especialidad) => (
              <option key={especialidad.id} value={especialidad.id}>
                {especialidad.nombre}
              </option>
            ))}
          </select>
        </div>

        {/* Selección de horario */}
        <div className="form-group">
          <label>Horario:</label>
          <select
            className="form-control"
            value={horarioId}
            onChange={(e) => setHorarioId(e.target.value)}
            required
          >
            {loadingHorarios ? (
              <option value="">Cargando horarios...</option>
            ) : (
              <option value="">Seleccione horario</option>
            )}
            {horarios.map((horario) => (
              <option key={horario.hora} value={horario.hora}>
                {horario.hora}
              </option>
            ))}
          </select>
        </div>

        {/* Fecha */}
        <div className="form-group">
          <label>Fecha:</label>
          <input
            type="date"
            className="form-control"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
        </div>

        {/* Botón de enviar */}
        <button type="submit" className="btn btn-primary">
          Solicitar Turno
        </button>
      </form>
    </div>
  );
};

export default TurnoForm;
