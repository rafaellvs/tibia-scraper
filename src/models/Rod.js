const rod = (sequelize, DataTypes) => {
  const Rod = sequelize.define('rod', {
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
    damage: {
      type: DataTypes.STRING,
    },
    dmg_type: {
      type: DataTypes.STRING,
    },
    range: {
      type: DataTypes.STRING,
    },
    mana_per_shot: {
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

  return Rod
}

export default rod
