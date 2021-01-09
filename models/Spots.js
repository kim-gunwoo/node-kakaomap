module.exports = (sequelize, DataTypes) => {
  const Spots = sequelize.define("Spots", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.TEXT,
    },
    geo: {
      type: DataTypes.GEOMETRY("POINT"),
    },
  });

  return Spots;
};
