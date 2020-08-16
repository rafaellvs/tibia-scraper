const amulet = (sequelize, DataTypes) => {
  const Amulet = sequelize.define('amulet', {
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
    duration: {
      type: DataTypes.STRING(512),
    },
    charges: {
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

  return Amulet
}

export default amulet
