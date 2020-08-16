const axe = (sequelize, DataTypes) => {
  const Axe = sequelize.define('axe', {
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
    def: {
      type: DataTypes.STRING(512),
    },
    def_mod: {
      type: DataTypes.STRING(512),
    },
    hands: {
      type: DataTypes.STRING(512),
    },
    resist: {
      type: DataTypes.STRING(512),
    },
    imbuing_slots: {
      type: DataTypes.STRING(512),
    },
    weight: {
      type: DataTypes.STRING(512),
    },
    skill_boost: {
      type: DataTypes.STRING(512),
    },
    dropped_by: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
  })

  return Axe
}

export default axe
