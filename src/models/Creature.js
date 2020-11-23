const creature = (sequelize, DataTypes) => {
  const Creature = sequelize.define('creature', {
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
    look: {
      type: DataTypes.TEXT(),
    },
    sounds: {
      type: DataTypes.ARRAY(DataTypes.TEXT()),
    },
    description: {
      type: DataTypes.TEXT(),
    },
    notes: {
      type: DataTypes.TEXT(),
    },
    abilities: {
      type: DataTypes.TEXT(),
    },
    location: {
      type: DataTypes.TEXT(),
    },
    behaviour: {
      type: DataTypes.TEXT(),
    },
    strategy: {
      type: DataTypes.TEXT(),
    },
    bestiary: {
      type: DataTypes.JSON(),
    },
    elemental: {
      type: DataTypes.JSON(),
    },
    health: {
      type: DataTypes.TEXT(),
    },
    exp: {
      type: DataTypes.TEXT(),
    },
    speed: {
      type: DataTypes.TEXT(),
    },
    armor: {
      type: DataTypes.TEXT(),
    },
    summon: {
      type: DataTypes.TEXT(),
    },
    convince: {
      type: DataTypes.TEXT(),
    },
    classification: {
      type: DataTypes.TEXT(),
    },
    class: {
      type: DataTypes.TEXT(),
    },
    paralysable: {
      type: DataTypes.BOOLEAN(),
    },
    inv_sense: {
      type: DataTypes.BOOLEAN(),
    },
    runs_at: {
      type: DataTypes.TEXT(),
    },
    walks_around: {
      type: DataTypes.TEXT(),
    },
    walks_through: {
      type: DataTypes.TEXT(),
    },
    loot: {
      type: DataTypes.ARRAY(DataTypes.TEXT()),
    },
  })

  return Creature
}

export default creature
