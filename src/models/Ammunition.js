const ammunition = (sequelize, DataTypes) => {
  const Ammunition = sequelize.define('ammunition', {
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
    phys_atk: {
      type: DataTypes.STRING,
    },
    element_atk: {
      type: DataTypes.STRING,
    },
    weight: {
      type: DataTypes.STRING,
    },
    npc_price: {
      type: DataTypes.STRING,
    },
    dropped_by: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
  })

  return Ammunition
}

export default ammunition
