import mysql from 'mysql2';

// Crear la conexión
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'turnosdb'
});

// Habilitar promesas
const connectionPromise = connection.promise();

export const login = async (req, res) => {
  const { usuario, password } = req.body;
  console.log("Usuario recibido:", usuario);  // Verifica que el usuario y la contraseña lleguen correctamente

  try {
    const [rows, fields] = await connectionPromise.execute('CALL iniciar_sesion(?, ?)', [usuario, password]);

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Usuario no encontrado' });
    }

    const user = rows[0];
    res.status(200).json({
      id: user.id,
      usuario: user.usuario,
      rol: user.rol
    });
  } catch (error) {
    console.error('Error al conectar con la base de datos o ejecutar el procedimiento:', error);
    res.status(500).json({ error: 'Hubo un error en el servidor' });
  }
};

