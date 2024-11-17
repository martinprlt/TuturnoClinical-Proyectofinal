// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary text-white py-3">
      <nav className="container d-flex justify-content-between align-items-center">
        <h1 className="h4">TuTurnoClinical</h1>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="/TurnoForm" className="nav-link text-white">Solicitar Turno</Link>
          </li>
          <li className="nav-item">
            <Link to="/TurnosList" className="nav-link text-white">Lista de Turnos</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link text-white">Iniciar sesión</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
