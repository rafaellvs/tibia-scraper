import axios from 'axios'
import cheerio from 'cheerio'

import { handleItemData } from '../../helpers/utils.js'

import scrapeAttributes from '../attributes/index.js'

const scrapeWithLoot = async url => {
  const basePath = 'https://tibia.fandom.com/wiki/'
  const path = basePath + url

  const html = await axios(path)
    .then(response => response.data)
    .catch(console.error)

  const $ = cheerio.load(html)
  const table = $('.wikitable')

  // get attributes (same as model)
  const attributes = await scrapeAttributes(url)

  // remove every thead from table
  table.find('th').parent().remove()

  // get each row in url data table
  const htmlRows = table.find('tr')
  const rows = []
  htmlRows.each(function (i, elem) {
    rows.push(
      $(this).text()
        .split('\n').slice(1, -1)
    )
  })

  // extract loot
  rows.map(row => {
    const loot = row.splice(4, row.length - 1)
    row.push(loot)
  })

  // generate items
  const items = rows.map(row =>
    row.reduce((acc, value, index) => {
      const data = handleItemData(attributes[index], value)

      return {
        ...acc,
        [attributes[index]]: data,
      }
    }
    , {})
  )

  return items
}

export default scrapeWithLoot
