
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Home from "./componentes/Home"; 
import Footer from "./componentes/Footer";
import Login from "./componentes/login"; 
import TurnoForm from "./componentes/TurnoForm"
import TurnosList from "./componentes/TurnosList"


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/TurnoForm" element={<TurnoForm />} />
        <Route path="/TurnosList" element={<TurnosList />} />


        {/* Define otras rutas aquí */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
