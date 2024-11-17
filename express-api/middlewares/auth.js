import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ message: "Token no proporcionado" });
  }

  token = token.split(" ")[1]; // El token viene en el formato "Bearer <token>"

  try {
    const { id, usuario } = jwt.verify(token, process.env.JWT_SECRET); // Usamos 'usuario' aquí
    req.id = id;
    req.usuario = usuario; // Usamos 'usuario' en lugar de 'username'
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token no válido" });
  }
};

export default verifyToken;

