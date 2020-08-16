const mount = (sequelize, DataTypes) => {
  const Mount = sequelize.define('mount', {
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
    taming_method: {
      type: DataTypes.STRING,
    },
  })

  return Mount
}

export default mount
