const ring = (sequelize, DataTypes) => {
  const Ring = sequelize.define('ring', {
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
    arm: {
      type: DataTypes.STRING,
    },
    weight: {
      type: DataTypes.STRING,
    },
    attributes: {
      type: DataTypes.STRING,
    },
    resist: {
      type: DataTypes.STRING,
    },
    duration: {
      type: DataTypes.STRING,
    },
    charges: {
      type: DataTypes.STRING,
    },
    required_level: {
      type: DataTypes.STRING,
    },
    required_vocation: {
      type: DataTypes.STRING,
    },
  })

  return Ring
}

export default ring
