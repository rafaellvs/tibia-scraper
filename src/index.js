import 'dotenv/config.js'

import models, { sequelize } from './models/index.js'

import scrapeData from './scraper/data/index.js'

import entities from './entities.js'

// add tables
// add { force: true } to force delete
const syncModels = async () =>
  await sequelize.sync({ force: true })
    .catch(err => console.log(err))

// insert all into db
const insertAll = async () => {
  entities.map(async entity => {
    const items = await scrapeData(entity.url)

    items.map(async item =>
      await models[entity.name].create(item)
        .catch(err => console.log(err))
    )
  })
}

// insert one entity by its model name
const insertOne = async name => {
  const entity = entities.find(ent => ent.name === name)
  const items = await scrapeData(entity.url)

  items.map(async item =>
    await models[entity.name].create(item)
      .catch(err => console.log(err))
  )
}

const main = async () => {
  await syncModels()
  await insertAll()
  // await insertOne('Spell')
}

main()
