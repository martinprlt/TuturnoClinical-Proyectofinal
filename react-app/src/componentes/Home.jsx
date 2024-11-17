import React from "react";
import hospitalImg from "../imagenes/hospital.jpg";

const Home = () => {
  return (
    <div className="container text-center my-5">
      <h2>Bienvenido a TuTurnoClinical</h2>
      <p className="lead">Solicita turnos fácilmente y gestiona tus citas médicas en línea.</p>
      <img
        src={hospitalImg}
        alt="hospital"
        className="img-fluid rounded"
        style={{ maxHeight: "400px" }}
      />
    </div>
  );
};

export default Home;
