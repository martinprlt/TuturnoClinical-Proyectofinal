import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'turnosdb'
});

console.log('Conectado a la base de datos MySQL');

export default connection;
