// import models
import creature from './Creature.js'
import boss from './Boss.js'
import sword from './Sword.js'
import axe from './Axe.js'
import club from './Club.js'
import distance from './Distance.js'
import ammunition from './Ammunition.js'
import rod from './Rod.js'
import wand from './Wand.js'
import helmet from './Helmet.js'
import armor from './Armor.js'
import shield from './Shield.js'
import spellbook from './Spellbook.js'
import legs from './Legs.js'
import boots from './Boots.js'
import amulet from './Amulet.js'
import ring from './Ring.js'
import lightsource from './LightSource.js'
import spell from './Spell.js'

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
  Creature: creature(sequelize, DataTypes),
  Boss: boss(sequelize, DataTypes),
  Sword: sword(sequelize, DataTypes),
  Axe: axe(sequelize, DataTypes),
  Club: club(sequelize, DataTypes),
  Distance: distance(sequelize, DataTypes),
  Ammunition: ammunition(sequelize, DataTypes),
  Rod: rod(sequelize, DataTypes),
  Wand: wand(sequelize, DataTypes),
  Helmet: helmet(sequelize, DataTypes),
  Armor: armor(sequelize, DataTypes),
  Shield: shield(sequelize, DataTypes),
  Spellbook: spellbook(sequelize, DataTypes),
  Legs: legs(sequelize, DataTypes),
  Boots: boots(sequelize, DataTypes),
  Amulet: amulet(sequelize, DataTypes),
  Ring: ring(sequelize, DataTypes),
  LightSource: lightsource(sequelize, DataTypes),
  Spell: spell(sequelize, DataTypes),

}

export default models
