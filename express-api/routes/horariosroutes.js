const express = require("express");
const router = express.Router();
const { obtenerEspecialidades, obtenerHorarios } = require("../controllers/horariosController");

router.get("/especialidades", obtenerEspecialidades);
router.get("/horarios", obtenerHorarios);

module.exports = router;
