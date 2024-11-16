import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Home from "./componentes/Home";
import TurnoForm from "./componentes/TurnoForm";
import TurnosList from "./componentes/TurnosList";
import Footer from "./componentes/Footer"; // Si decides agregar un footer

import "./styles.css"; // Asegúrate de importar los estilos

function App() {
  return (
    <Router>
      <Header /> {/* Barra de navegación */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solicitar-turno" element={<TurnoForm />} /> {/* Ruta para el formulario de turnos */}
        <Route path="/turnos" element={<TurnosList />} /> {/* Ruta para la lista de turnos */}
      </Routes>
      <Footer /> {/* Pie de página */}
    </Router>
  );
}

export default App;
