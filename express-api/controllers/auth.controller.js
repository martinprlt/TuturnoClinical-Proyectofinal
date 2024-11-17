// Mantén el nombre 'login' como función
import mysql from 'mysql2/promise';

export const login = async (req, res) => {
  const { usuario, password } = req.body;

  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'turnosdb',
    });

    const [rows] = await connection.execute('CALL iniciar_sesion(?, ?)', [usuario, password]);

    if (rows[0] && rows[0].error) {
      return res.status(401).json({ error: rows[0].error });
    }

    const { id, usuario: user, rol } = rows[0][0];
    return res.json({ id, usuario: user, rol });
  } catch (error) {
    console.error('Error al conectar con la base de datos o ejecutar el procedimiento:', error);
    return res.status(500).json({ error: 'Hubo un error en el servidor' });
  }
};
