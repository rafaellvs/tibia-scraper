const boots = (sequelize, DataTypes) => {
  const Boots = sequelize.define('boots', {
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
    imbuing_slots: {
      type: DataTypes.TEXT(),
    },
    required_level: {
      type: DataTypes.TEXT(),
    },
    required_vocation: {
      type: DataTypes.TEXT(),
    },
    dropped_by: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
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
    duration: {
      type: DataTypes.TEXT(),
    },
    sellTo: {
      type: DataTypes.ARRAY(DataTypes.JSON()),
    },
    buyFrom: {
      type: DataTypes.ARRAY(DataTypes.JSON()),
    },
  })

  return Boots
}

export default boots
