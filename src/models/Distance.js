const distance = (sequelize, DataTypes) => {
  const Distance = sequelize.define('distance', {
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
    lvl: {
      type: DataTypes.STRING,
    },
    phys_atk: {
      type: DataTypes.STRING,
    },
    element_atk: {
      type: DataTypes.STRING,
    },
    range: {
      type: DataTypes.STRING,
    },
    atk_mod: {
      type: DataTypes.STRING,
    },
    hit_mod: {
      type: DataTypes.STRING,
    },
    resist: {
      type: DataTypes.STRING,
    },
    imbuing_slots: {
      type: DataTypes.STRING,
    },
    skill_boost: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    weight: {
      type: DataTypes.STRING,
    },
    dropped_by: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
  })

  return Distance
}

export default distance
