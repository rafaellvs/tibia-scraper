import 'dotenv/config.js'

import models, { sequelize } from './models/index.js'

import scrapeData from './scraper/list/index.js'

import entities from './entities.js'

// insert one entity into db
const insertOne = async entity => {
  const name = entity.name
  const url = entity.url

  console.log()
  console.log('******************')
  console.log(`Scraping ${url}`)
  await scrapeData(url).then(async items => {
    console.log(`Done scraping ${url}`)

    await models[name].sync({ force: true })
      .then(console.log(`\nConnected at database ${name} entity\n`))
      .catch(err => console.log(`\nConnection to database ${name} entity failed: ${err}\n`))

    console.log(`\nInserting items into ${name} entity\n`)
    await models[name].bulkCreate(items)
      .then(() => {
        console.log()
        console.log('Insertion done')
        console.log(`Succesfully inserted ${items.length} items at ${name} entity`)
      })
      .catch(err => console.log(`\nError on insertion at ${name} entity: ${err}\n`))
  })
}

// insert all into db
const insertAll = async () => {
  for (let i = 0; i < entities.length; i++) {
    await insertOne(entities[i])
  }
}

const main = async () => {
  // await insertOne(entities.find(entity => entity.name === 'Club'))
  await insertAll()

  sequelize.close()
    .then(console.log('Connection closed'))
}

main()
