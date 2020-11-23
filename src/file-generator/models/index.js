import fs from 'fs'

import scrapeAttributes from '../../scraper/attributes/index.js'
import entities from '../../entities.js'

import indexModel from './templates/index.js'
import creatureModel from './templates/creature.js'
import itemModel from './templates/item.js'
import spellModel from './templates/spell.js'

const selectModel = (name, url, attributes) => {
  switch (url) {
    case 'List_of_Creatures':
    case 'Bosses':
      return creatureModel(name)

    case 'Spells':
      return spellModel(name)

    default:
      return itemModel(name, attributes)
  }
}

const createModel = async (name, url) => {
  const fileName = `src/models/${name}.js`
  const attributes = await scrapeAttributes(url)
  const code = selectModel(name, url, attributes)

  fs.writeFile(
    fileName,
    code,
    err => err ? console.log(err) : console.log(`File ${fileName} created.`)
  )
}

const createFiles = async () => {
  console.log('Generating files...')

  // create models folder
  const dir = 'src/models'
  !fs.existsSync(dir) && fs.mkdirSync(dir)

  // create models
  entities.map(async entity =>
    await createModel(entity.name, entity.url)
  )

  // create index
  const code = indexModel(entities)
  fs.writeFile(
    'src/models/index.js',
    code,
    err => err ? console.log(err) : console.log('File src/models/index.js created.')
  )
}

createFiles()
