import axios from 'axios'
import cheerio from 'cheerio'

import { handleItemData } from '../helpers/utils.js'

import scrapeAttributes from './scrape-attributes.js'

const scrape = async page => {
  const basePath = 'https://tibia.fandom.com/wiki/'
  const url = basePath + page

  const html = await axios(url)
    .then(response => response.data)
    .catch(console.error)

  const $ = cheerio.load(html)
  const table = $('.wikitable')

  // get attributes (same as model)
  const attributes = await scrapeAttributes(page)

  // if page has loot (like Creatures), html structure is different
  const hasLoot = attributes.includes('loot')
  const htmlLoot = table.find('.loot-table')
  const loot = []
  table.find('.loot-table').parent().remove()

  hasLoot &&
  htmlLoot.each(function (i, elem) {
    loot.push(
      $(this).text().split('\n')
    )
  })

  // get each row in url data table
  const htmlRows = table.find('tr')
  const rows = []
  htmlRows.each(function (i, elem) {
    rows.push(
      $(this).text().split('\n').slice(1, -1)
    )
    hasLoot && rows[i].push(loot[i])
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

  // 1st item is thead
  items.shift()

  return items
}

export default scrape
