const lightsource = (sequelize, DataTypes) => {
  const LightSource = sequelize.define('lightsource', {
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
    attributes: {
      type: DataTypes.STRING,
    },
    resist: {
      type: DataTypes.STRING,
    },
    weight: {
      type: DataTypes.STRING,
    },
    color: {
      type: DataTypes.STRING,
    },
    radius: {
      type: DataTypes.STRING,
    },
    dropped_by: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
  })

  return LightSource
}

export default lightsource
