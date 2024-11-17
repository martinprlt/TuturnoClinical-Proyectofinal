import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) return res.status(403).json({ message: 'Token requerido' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Token inválido' });

    req.userId = decoded.id;
    next();
  });
};

export default verifyToken;
