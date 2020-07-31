const armor = (sequelize, DataTypes) => {
  const Armor = sequelize.define('armor', {
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
    imbuing_slots: {
      type: DataTypes.STRING,
    },
    required_level: {
      type: DataTypes.STRING,
    },
    required_vocation: {
      type: DataTypes.STRING,
    },
    dropped_by: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
  })

  return Armor
}

export default armor
