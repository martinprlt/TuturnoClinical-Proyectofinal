import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/solicitar-turno">Solicitar Turno</Link></li>
          <li><Link to="/turnos">Lista de Turnos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
