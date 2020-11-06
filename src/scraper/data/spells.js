import axios from 'axios'
import cheerio from 'cheerio'

import { handleItemData } from '../../helpers/utils.js'

import scrapeAttributes from '../attributes/index.js'

const scrapeSpells = async () => {
  const path = 'https://tibia.fandom.com/wiki/Spells'

  const html = await axios(path)
    .then(response => response.data)
    .catch(console.error)

  const $ = cheerio.load(html)
  const table = $('.wikitable')

  // get attributes (same as model)
  const attributes = await scrapeAttributes('Spells')

  // remove every thead from table
  table.find('th').parent().remove()

  // constants (indexes and lengths)
  const AMOUNT_INDEX = 6
  const TYPE_INDEX = attributes.indexOf('type')
  const SP_INDEX = attributes.indexOf('soul_points')
  const INSTANT_LENGTH = 9
  const RUNE_LENGTH = 11

  // get each row in url data table
  const htmlRows = $(table).find('tr')
  const rows = []
  htmlRows.each(function (i, tr) {
    let row = []

    $(tr).find('td').each(function (i, td) {
      row = [...row, $(td).html()]
    })

    rows.push(row)
    row = []
  })

  // generate rune spell items
  const runeSpells =
    rows.slice().filter(row => row.length === RUNE_LENGTH)
      .map(r =>
        r.splice(AMOUNT_INDEX, 1) && // remove 'amount' data
        r.splice(TYPE_INDEX, 0, 'Rune') && // insert 'Rune' for 'Type' column
        r.reduce((acc, value, index) => {
          const data = handleItemData(attributes[index], value)

          return {
            ...acc,
            [attributes[index]]: data,
          }
        }
        , {})
      )

  // generate instant spell items
  const instantSpells =
    rows.slice().filter(row => row.length === INSTANT_LENGTH)
      .map(r =>
        r.splice(SP_INDEX, 0, '') && // insert null for soul points
        r.splice(TYPE_INDEX, 0, 'Instant') && // insert 'Instant' for 'Type' column
        r.reduce((acc, value, index) => {
          const data = handleItemData(attributes[index], value)

          return {
            ...acc,
            [attributes[index]]: data,
          }
        }
        , {})
      )

  // generate items
  const items = [...instantSpells, ...runeSpells]

  return items
}

export default scrapeSpells
