import axios from 'axios'
import cheerio from 'cheerio'

import { formatString, handleCheckmark } from '../../helpers/utils.js'

const scrapeSingleItem = async name => {
  if (name === 'Playground/Items2') return null

  const path = `https://tibia.fandom.com/wiki/${name}`

  const html = await axios(path)
    .then(response => response.data)
    .catch(console.error)

  const $ = cheerio.load(html)

  // item look
  const look = formatString(
    $('.item-look').text()
  )

  // wiki notes about entity
  const htmlNotes = $('#item-notes')
  htmlNotes.find('h3').remove()
  htmlNotes.find('.spoiler-container').remove()
  const notes = formatString(
    htmlNotes.text()
  )

  // history
  const htmlHistory = $('#item-history')
  htmlHistory.find('h3').remove()
  const history = formatString(
    htmlHistory.text()
  )

  // general properties
  const properties = { }
  const htmlProperties = $('#tabular-data')
  htmlProperties.find('tr').each(function (i, tr) {
    const property = $(tr).find('.property').text()
    const value = $(tr).find('.value').html()

    if (property.includes('Stackable')) { properties.stackable = handleCheckmark(formatString(value)) }
    if (property.includes('Marketable')) { properties.marketable = handleCheckmark(formatString(value)) }
    if (property.includes('Usable')) { properties.usable = handleCheckmark(formatString(value)) }
    if (property.includes('Imbuable')) { properties.imbuable = handleCheckmark(formatString(value)) }
    if (property.includes('Duration')) { properties.duration = formatString(value) }
  })

  // Buy from
  const buyFromTr = $('#item-trades-buyfrom').find('tbody tr')
  const buyFromRows = []
  buyFromTr.each(function (i, tr) {
    let row = []

    $(tr).find('td').each(function (i, td) {
      $(td).find('sup').remove()
      row = [...row, $(td).text().replace('*', '')]
    })

    row.length && buyFromRows.push(row)
    row = []
  })
  const buyFrom = buyFromRows.map(row => ({
    npc: row[0],
    city: row[1],
    price: row[2],
  }))

  // Sell to
  const sellToTr = $('#item-trades-sellto').find('tbody tr')
  const sellToRows = []
  sellToTr.each(function (i, tr) {
    let row = []

    $(tr).find('td').each(function (i, td) {
      $(td).find('sup').remove()
      row = [...row, $(td).text().replace('*', '')]
    })

    row.length && sellToRows.push(row)
    row = []
  })
  const sellTo = sellToRows.map(row => ({
    npc: row[0],
    city: row[1],
    price: row[2],
  }))

  const item = {
    look,
    notes,
    history,
    ...properties,
    sellTo,
    buyFrom,
  }

  console.log(`Scraped ${name}`)
  return item
}

export default scrapeSingleItem
