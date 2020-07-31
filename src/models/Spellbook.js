const spellbook = (sequelize, DataTypes) => {
  const Spellbook = sequelize.define('spellbook', {
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
    level: {
      type: DataTypes.STRING,
    },
    def: {
      type: DataTypes.STRING,
    },
    skill_boost: {
      type: DataTypes.STRING,
    },
    resistances: {
      type: DataTypes.STRING,
    },
    imbuing_slots: {
      type: DataTypes.STRING,
    },
    weight: {
      type: DataTypes.STRING,
    },
    dropped_by: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
  })

  return Spellbook
}

export default spellbook
