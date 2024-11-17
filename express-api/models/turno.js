module.exports = (sequelize, DataTypes) => {
    const Turno = sequelize.define("turnos", {
      nombre: DataTypes.STRING,
      apellido: DataTypes.STRING,
      dni: DataTypes.STRING,
      telefono: DataTypes.STRING,
      email: DataTypes.STRING,
      fecha: DataTypes.DATE,
    });
  
    Turno.associate = (models) => {
      Turno.belongsTo(models.horarios, { foreignKey: "horario_id" });
      Turno.belongsTo(models.especialidades, { foreignKey: "especialidad_id" });
    };
  
    return Turno;
  };
  