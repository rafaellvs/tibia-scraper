const boss = (sequelize, DataTypes) => {
  const Boss = sequelize.define('boss', {
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

  return Boss
}

export default boss
