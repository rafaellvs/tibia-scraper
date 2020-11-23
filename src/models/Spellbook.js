const spellbook = (sequelize, DataTypes) => {
  const Spellbook = sequelize.define('spellbook', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT(),
    },
    image: {
      type: DataTypes.TEXT(),
    },
    lvl: {
      type: DataTypes.TEXT(),
    },
    def: {
      type: DataTypes.TEXT(),
    },
    skill_boost: {
      type: DataTypes.TEXT(),
    },
    resistances: {
      type: DataTypes.TEXT(),
    },
    imbuing_slots: {
      type: DataTypes.TEXT(),
    },
    weight: {
      type: DataTypes.TEXT(),
    },
    dropped_by: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
    look: {
      type: DataTypes.TEXT(),
    },
    notes: {
      type: DataTypes.TEXT(),
    },
    history: {
      type: DataTypes.TEXT(),
    },
    stackable: {
      type: DataTypes.BOOLEAN(),
    },
    marketable: {
      type: DataTypes.BOOLEAN(),
    },
    usable: {
      type: DataTypes.BOOLEAN(),
    },
    imbuable: {
      type: DataTypes.BOOLEAN(),
    },
    duration: {
      type: DataTypes.TEXT(),
    },
    sellTo: {
      type: DataTypes.ARRAY(DataTypes.JSON()),
    },
    buyFrom: {
      type: DataTypes.ARRAY(DataTypes.JSON()),
    },
  })

  return Spellbook
}

export default spellbook
