const itemModel = (entity, attributes) =>
`const ${entity.toLowerCase()} = (sequelize, DataTypes) => {
  const ${entity} = sequelize.define('${entity.toLowerCase()}', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ${attributes.map(attr =>
      attr === 'dropped_by'
        ? `${attr}: {\ntype: DataTypes.ARRAY(DataTypes.TEXT)\n}`
        : `${attr}: {\ntype: DataTypes.TEXT()\n}`
    )},
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
    ${attributes.includes('duration')
      ? ''
      : (
        `duration: {
          type: DataTypes.TEXT(),
        },`
      )
    }
    sellTo: {
      type: DataTypes.ARRAY(DataTypes.JSON()),
    },
    buyFrom: {
      type: DataTypes.ARRAY(DataTypes.JSON()),
    },
  })

  return ${entity}
}

export default ${entity.toLowerCase()}
`

export default itemModel
