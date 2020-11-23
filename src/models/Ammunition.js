const ammunition = (sequelize, DataTypes) => {
  const Ammunition = sequelize.define('ammunition', {
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
    phys_atk: {
      type: DataTypes.TEXT(),
    },
    element_atk: {
      type: DataTypes.TEXT(),
    },
    weight: {
      type: DataTypes.TEXT(),
    },
    npc_price: {
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

  return Ammunition
}

export default ammunition
