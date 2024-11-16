import React from "react";
import hospitalImg from '../imagenes/hospital.jpg'; 

const Home = () => {
  return (
    <div>
      <h2>Bienvenido a TuTurnoClinical</h2>
      <p>Solicita turnos fácilmente y gestiona tus citas médicas en línea.</p>
      <img
        src={hospitalImg}
        alt="hospital"
        style={{
          width: "100%",
          height: "auto",  
        }}
      />
    </div>
  );
};

export default Home;
