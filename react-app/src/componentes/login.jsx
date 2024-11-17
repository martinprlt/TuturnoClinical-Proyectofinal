import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate(); // Usa useNavigate
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log('Enviando datos al backend:', { usuario, password });
  
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { usuario, password });
  
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        navigate('/');
      } else {
        setError('Usuario o contraseña incorrectos');
      }
    } catch (err) {
      console.error('Error en la solicitud de login:', err);
      setError('Usuario o contraseña incorrectos');
    }
  };
  
  
  return (
    <div className="login-container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card p-4" style={{ width: '400px' }}>
        <h2 className="text-center">Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="usuario" className="form-label">Usuario</label>
            <input
              type="text"
              id="usuario"
              className="form-control"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-danger">{error}</p>}
          <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
