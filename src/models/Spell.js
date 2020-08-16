const spell = (sequelize, DataTypes) => {
  const Spell = sequelize.define('spell', {
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
    words: {
      type: DataTypes.STRING,
    },
    prem: {
      type: DataTypes.STRING,
    },
    level: {
      type: DataTypes.STRING,
    },
    mana: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
    group: {
      type: DataTypes.STRING,
    },
    effect: {
      type: DataTypes.STRING,
    },
  })

  return Spell
}

export default spell
