import mysql from 'mysql2';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'nombre_base_de_datos',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool; // Exportamos el pool como export default
