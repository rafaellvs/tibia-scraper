const indexModel = entities =>
`// import models
${entities.map(entity =>
  `import ${entity.name.toLowerCase()} from './${entity.name}.js'\n`
).join('')}

import sequelizePKG from 'sequelize'
const { Sequelize, DataTypes } = sequelizePKG

// local connection
export const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
    define: { timestamps: false },
  }
)

// deployed connection
// export const sequelize = new Sequelize(process.env.DATABASE_URL,
//   {
//     dialect: 'postgres',
//     protocol: 'postgres',
//     define: { timestamps: false },
//     pool: {
//       max: 20,
//     },
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false,
//       },
//     },
//   }
// )

const models = {
  ${entities.map(entity =>
    `${entity.name}: ${entity.name.toLowerCase()}(sequelize, DataTypes)\n`
  )}
}

export default models
`

export default indexModel
