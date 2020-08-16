const boss = (sequelize, DataTypes) => {
  const Boss = sequelize.define('boss', {
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

  return Boss
}

export default boss
