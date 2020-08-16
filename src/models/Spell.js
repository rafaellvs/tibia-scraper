const spell = (sequelize, DataTypes) => {
  const Spell = sequelize.define('spell', {
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
    words: {
      type: DataTypes.STRING(512),
    },
    prem: {
      type: DataTypes.STRING(512),
    },
    level: {
      type: DataTypes.STRING(512),
    },
    mana: {
      type: DataTypes.STRING(512),
    },
    price: {
      type: DataTypes.STRING(512),
    },
    group: {
      type: DataTypes.STRING(512),
    },
    effect: {
      type: DataTypes.STRING(512),
    },
  })

  return Spell
}

export default spell
