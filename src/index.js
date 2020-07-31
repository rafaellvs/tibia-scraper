import 'dotenv/config.js'

import models, { sequelize } from './models/index.js'

import scrape from './scraper/index.js'

import entities from './entities.js'

// add tables
const syncModels = async () =>
  await sequelize.sync({ force: true })
    .catch(err => console.log(err))

// insert into db
const insertItems = async () => {
  entities.map(async entity => {
    const items = await scrape(entity.url)

    items.map(async item =>
      await models[entity.name].create(item)
        .catch(err => console.log(err))
    )
  })
}

const main = async () => {
  await syncModels()
  await insertItems()
}

main()
