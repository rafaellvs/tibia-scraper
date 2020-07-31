const axe = (sequelize, DataTypes) => {
  const Axe = sequelize.define('axe', {
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
    def: {
      type: DataTypes.STRING,
    },
    def_mod: {
      type: DataTypes.STRING,
    },
    hands: {
      type: DataTypes.STRING,
    },
    resist: {
      type: DataTypes.STRING,
    },
    imbuing_slots: {
      type: DataTypes.STRING,
    },
    weight: {
      type: DataTypes.STRING,
    },
    skill_boost: {
      type: DataTypes.STRING,
    },
    dropped_by: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
  })

  return Axe
}

export default axe
