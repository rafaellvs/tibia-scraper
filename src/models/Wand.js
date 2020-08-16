const wand = (sequelize, DataTypes) => {
  const Wand = sequelize.define('wand', {
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
    damage: {
      type: DataTypes.STRING(512),
    },
    dmg_type: {
      type: DataTypes.STRING(512),
    },
    range: {
      type: DataTypes.STRING(512),
    },
    mana_per_shot: {
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

  return Wand
}

export default wand
