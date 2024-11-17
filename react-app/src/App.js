import React from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 

// Importa el proveedor del contexto
import { AuthProvider } from "./context/AuthProvider"; 

// Componentes
import Header from "./componentes/Header";
import Home from "./componentes/Home"; 
import Footer from "./componentes/Footer";
import Login from "./componentes/login"; 
import TurnoForm from "./componentes/TurnoForm";
import TurnosList from "./componentes/TurnosList";

const App = () => {
  return (
    <AuthProvider>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/TurnoForm" element={<TurnoForm />} />
          <Route path="/TurnosList" element={<TurnosList />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;
