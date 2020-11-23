const mount = (sequelize, DataTypes) => {
  const Mount = sequelize.define('mount', {
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
    taming_method: {
      type: DataTypes.STRING(512),
    },
    look: {
      type: DataTypes.STRING(512),
    },
    notes: {
      type: DataTypes.STRING(512),
    },
    sellTo: {
      type: DataTypes.ARRAY(DataTypes.JSON()),
    },
    buyFrom: {
      type: DataTypes.ARRAY(DataTypes.JSON()),
    },
  })

  return Mount
}

export default mount
