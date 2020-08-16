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
  })

  return Mount
}

export default mount
