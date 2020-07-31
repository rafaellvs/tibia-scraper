import fs from 'fs'

import scrapeAttributes from '../../scraper/scrape-attributes.js'
import { model, index } from './code-templates.js'
import entities from '../../entities.js'

const createModel = async (name, url) => {
  const attributes = await scrapeAttributes(url)
  const fileName = `src/models/${name}.js`
  const code = model(name, attributes)

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
  const code = index(entities)
  fs.writeFile(
    'src/models/index.js',
    code,
    err => err ? console.log(err) : console.log('File src/models/index.js created.')
  )
}

createFiles()
