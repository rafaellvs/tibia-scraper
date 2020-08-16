const ammunition = (sequelize, DataTypes) => {
  const Ammunition = sequelize.define('ammunition', {
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
    phys_atk: {
      type: DataTypes.STRING(512),
    },
    element_atk: {
      type: DataTypes.STRING(512),
    },
    weight: {
      type: DataTypes.STRING(512),
    },
    npc_price: {
      type: DataTypes.STRING(512),
    },
    dropped_by: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
  })

  return Ammunition
}

export default ammunition
