import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider"; // Asegúrate de que esta importación esté aquí
import axios from "axios";

const Login = () => {
  const [usuario, setUsuario] = useState(""); // Usamos 'usuario' aquí
  const [password, setPassword] = useState(""); // Contraseña
  const [error, setError] = useState(""); // Para mostrar errores
  const { setToken } = useContext(AuthContext); // Obtener 'setToken' del contexto
  const navigate = useNavigate(); // Para redireccionar

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log("Enviando datos de login:", { usuario, password });  // Verifica qué valores se están enviando
  
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        usuario: usuario,
        password: password,
      });
  
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        navigate("/dashboard");  // Redirigir a una página después de un login exitoso
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      setError('Hubo un error en el servidor');
    }
  };
  
  
  return (
    <section className="py-3 py-md-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <div className="card border border-light-subtle rounded-3 shadow-sm">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <h2 className="fs-6 fw-normal text-center text-secondary mb-4">
                  Acceso Sistema de Ventas
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="row gy-2 overflow-hidden">
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          name="usuario"
                          value={usuario}
                          onChange={(e) => setUsuario(e.target.value)}
                          placeholder="Nombre de usuario"
                          required
                        />
                        <label className="form-label">Nombre de usuario</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Contraseña"
                          required
                        />
                        <label className="form-label">Contraseña</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid my-3">
                        <button className="btn btn-primary btn-lg" type="submit">
                          Ingresar
                        </button>
                      </div>
                    </div>
                  </div>
                </form>

                {error && <div className="alert alert-danger">{error}</div>} {/* Muestra errores */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
