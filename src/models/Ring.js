const ring = (sequelize, DataTypes) => {
  const Ring = sequelize.define('ring', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT(),
    },
    image: {
      type: DataTypes.TEXT(),
    },
    arm: {
      type: DataTypes.TEXT(),
    },
    weight: {
      type: DataTypes.TEXT(),
    },
    attributes: {
      type: DataTypes.TEXT(),
    },
    resist: {
      type: DataTypes.TEXT(),
    },
    duration: {
      type: DataTypes.TEXT(),
    },
    charges: {
      type: DataTypes.TEXT(),
    },
    required_level: {
      type: DataTypes.TEXT(),
    },
    required_vocation: {
      type: DataTypes.TEXT(),
    },
    look: {
      type: DataTypes.TEXT(),
    },
    notes: {
      type: DataTypes.TEXT(),
    },
    history: {
      type: DataTypes.TEXT(),
    },
    stackable: {
      type: DataTypes.BOOLEAN(),
    },
    marketable: {
      type: DataTypes.BOOLEAN(),
    },
    usable: {
      type: DataTypes.BOOLEAN(),
    },
    imbuable: {
      type: DataTypes.BOOLEAN(),
    },

    sellTo: {
      type: DataTypes.ARRAY(DataTypes.JSON()),
    },
    buyFrom: {
      type: DataTypes.ARRAY(DataTypes.JSON()),
    },
  })

  return Ring
}

export default ring
