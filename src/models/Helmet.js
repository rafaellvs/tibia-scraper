const helmet = (sequelize, DataTypes) => {
  const Helmet = sequelize.define('helmet', {
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
    arm: {
      type: DataTypes.STRING(512),
    },
    weight: {
      type: DataTypes.STRING(512),
    },
    attributes: {
      type: DataTypes.STRING(512),
    },
    resist: {
      type: DataTypes.STRING(512),
    },
    imbuing_slots: {
      type: DataTypes.STRING(512),
    },
    required_level: {
      type: DataTypes.STRING(512),
    },
    required_vocation: {
      type: DataTypes.STRING(512),
    },
    dropped_by: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
  })

  return Helmet
}

export default helmet
