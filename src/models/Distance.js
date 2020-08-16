const distance = (sequelize, DataTypes) => {
  const Distance = sequelize.define('distance', {
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
    lvl: {
      type: DataTypes.STRING(512),
    },
    phys_atk: {
      type: DataTypes.STRING(512),
    },
    element_atk: {
      type: DataTypes.STRING(512),
    },
    range: {
      type: DataTypes.STRING(512),
    },
    atk_mod: {
      type: DataTypes.STRING(512),
    },
    hit_mod: {
      type: DataTypes.STRING(512),
    },
    resist: {
      type: DataTypes.STRING(512),
    },
    imbuing_slots: {
      type: DataTypes.STRING(512),
    },
    skill_boost: {
      type: DataTypes.STRING(512),
    },
    type: {
      type: DataTypes.STRING(512),
    },
    weight: {
      type: DataTypes.STRING(512),
    },
    dropped_by: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
  })

  return Distance
}

export default distance
