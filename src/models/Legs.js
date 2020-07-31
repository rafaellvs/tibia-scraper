const legs = (sequelize, DataTypes) => {
  const Legs = sequelize.define('legs', {
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

  return Legs
}

export default legs
