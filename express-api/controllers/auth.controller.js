// controllers/auth.controller.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../config/db.js'; // Asegúrate de que el pool esté bien configurado

// Función de login
const login = async (req, res) => {
  const { usuario, password } = req.body;

  console.log('Datos recibidos en el backend:', { usuario, password });

  try {
    // Verifica si el usuario existe en la base de datos
    const [rows] = await pool.query('SELECT * FROM administradores WHERE usuario = ?', [usuario]);

    if (rows.length === 0) {
      return res.status(404).json({ msg: 'Usuario no encontrado' });
    }

    const admin = rows[0]; // Obtener el primer registro que coincide

    // Compara la contraseña ingresada con la almacenada en la base de datos
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Contraseña incorrecta' });
    }

    // Si las contraseñas coinciden, genera un token JWT
    const token = jwt.sign({ id: admin.id, usuario: admin.usuario }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.json({ token });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Error del servidor' });
  }
};

export default login;
