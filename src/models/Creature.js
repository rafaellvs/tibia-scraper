const creature = (sequelize, DataTypes) => {
  const Creature = sequelize.define('creature', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(512),
    },
    image: {
      type: DataTypes.STRING(512),
    },
    exp: {
      type: DataTypes.STRING(512),
    },
    hp: {
      type: DataTypes.STRING(512),
    },
    loot: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
  })

  return Creature
}

export default creature
