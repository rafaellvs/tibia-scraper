const creature = (sequelize, DataTypes) => {
  const Creature = sequelize.define('creature', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    exp: {
      type: DataTypes.STRING,
    },
    hp: {
      type: DataTypes.STRING,
    },
    loot: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
  })

  return Creature
}

export default creature
