const spell = (sequelize, DataTypes) => {
  const Spell = sequelize.define('spell', {
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
    words: {
      type: DataTypes.TEXT(),
    },
    lvl: {
      type: DataTypes.TEXT(),
    },
    mana: {
      type: DataTypes.TEXT(),
    },
    soul: {
      type: DataTypes.TEXT(),
    },
    dmg_type: {
      type: DataTypes.TEXT(),
    },
    group: {
      type: DataTypes.TEXT(),
    },
    cooldown: {
      type: DataTypes.TEXT(),
    },
    cooldown_group: {
      type: DataTypes.TEXT(),
    },
    vocation: {
      type: DataTypes.ARRAY(DataTypes.TEXT()),
    },
    premmium: {
      type: DataTypes.BOOLEAN(),
    },
    promotion: {
      type: DataTypes.BOOLEAN(),
    },
    cost: {
      type: DataTypes.TEXT(),
    },
    effect: {
      type: DataTypes.TEXT(),
    },
    notes: {
      type: DataTypes.TEXT(),
    },
    history: {
      type: DataTypes.TEXT(),
    },
    learn_from: {
      type: DataTypes.ARRAY(DataTypes.JSON()),
    },
  })

  return Spell
}

export default spell
