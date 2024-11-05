import pool from "../../express-api/config/db.js";

const findByUsername = async (username) => {
  const [row] = await pool.query("SELECT * FROM administradores WHERE username = ?", [
    username,
  ]);
  return row[0];
};

export const register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await findByUsername(username);
    if (user) {
      return res.json({ message: "Usuario ya existe" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await pool.query(
      "INSERT INTO administradores (username, password) VALUES (?, ?)",
      [username, hashedPassword]
    );
    res.json({ message: "Usuario registrado exitosamente" });
  } catch (error) {
    res.json(error.message);
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await findByUsername(username);
    if (!user) {
      return res.json({ message: "Usuario y/o contraseña son incorrectos" });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.json({ message: "Usuario y/o contraseña son incorrectos" });
    }

    const token = jwt.sign(
      { uid: user.uid, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token: token });
  } catch (error) {
    console.log(error.message);
  }
};
