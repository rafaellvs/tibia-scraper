import 'dotenv/config.js'

import models, { sequelize } from './models/index.js'

import scrape from './scraper/index.js'

import entities from './entities.js'

// add tables
const syncModels = async () =>
  // add { force: true } to force delete
  await sequelize.sync()
    .catch(err => console.log(err))

// insert all into db
const insertAll = async () => {
  entities.map(async entity => {
    const items = await scrape(entity.url)

    items.map(async item =>
      await models[entity.name].create(item)
        .catch(err => console.log(err))
    )
  })
}

// insert one entity by its model name
const insertOne = async name => {
  const entity = entities.find(ent => ent.name === name)
  const items = await scrape(entity.url)

  items.map(async item =>
    await models[entity.name].create(item)
      .catch(err => console.log(err))
  )
}

const main = async () => {
  await syncModels()
  // await insertAll()
  await insertOne('Mount')
  await insertOne('Spell')
}

main()
