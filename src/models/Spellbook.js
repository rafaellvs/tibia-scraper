const spellbook = (sequelize, DataTypes) => {
  const Spellbook = sequelize.define('spellbook', {
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
    level: {
      type: DataTypes.STRING(512),
    },
    def: {
      type: DataTypes.STRING(512),
    },
    skill_boost: {
      type: DataTypes.STRING(512),
    },
    resistances: {
      type: DataTypes.STRING(512),
    },
    imbuing_slots: {
      type: DataTypes.STRING(512),
    },
    weight: {
      type: DataTypes.STRING(512),
    },
    dropped_by: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
  })

  return Spellbook
}

export default spellbook
