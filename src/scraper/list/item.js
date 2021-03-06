import axios from 'axios'
import cheerio from 'cheerio'

import { handleItemData } from '../../helpers/utils.js'

import scrapeAttributes from '../attributes/index.js'

import scrapeSingleItem from '../single/item.js'

const scrapeItemList = async url => {
  const basePath = 'https://tibia.fandom.com/wiki/'
  const path = basePath + url

  const html = await axios(path)
    .then(response => response.data)
    .catch(console.error)

  const $ = cheerio.load(html)
  const table = $('.wikitable')

  // remove every thead from table
  table.find('th').parent().remove()

  // get each row in url data table
  const htmlRows = table.find('tr')
  const rows = []
  htmlRows.each(function (i, tr) {
    let row = []

    $(tr).find('td').each(function (i, td) {
      row = [...row, $(td).html()]
    })

    rows.push(row)
    row = []
  })

  // get attributes (same as model)
  const attributes = await scrapeAttributes(url)

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

  // merge items with its single article data
  const merged = await Promise.all(
    items.map(async item => {
      const singleData = await scrapeSingleItem(item.name.replace(' ', '_'))
      return {
        ...item,
        ...singleData,
      }
    })
  )

  return merged
}

export default scrapeItemList
