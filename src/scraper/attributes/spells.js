import axios from 'axios'
import cheerio from 'cheerio'

import { formatAttribute } from '../../helpers/utils.js'

const scrapeSpells = async () => {
  const html = await axios('https://tibia.fandom.com/wiki/Spells')
    .then(response => response.data)
  const $ = cheerio.load(html)

  // get table header cells
  const htmlTh = $('.wikitable th')
  htmlTh.find('p').remove()

  // each th into array
  const attributesRaw = []
  htmlTh.each(function (i, elem) {
    attributesRaw.push(
      $(this).text().replace(/\n/g, '')
    )
  })

  // format attributes
  const formatted = attributesRaw.map(att => formatAttribute(att))

  // remove duplicates
  const noDuplicates = new Set(formatted)

  // remove 'amount', 'soul points' and 'effect' columns
  // 'soul_points' and 'effect' will be added later cause i want to change their order
  const attributes = [...noDuplicates]
    .filter(att =>
      att !== 'amount' &&
      att !== 'soul_points' &&
      att !== 'effect'
    )

  // add 'type' column
  attributes.splice(7, 0, 'type')
  // add 'soul points' again
  attributes.splice(5, 0, 'soul_points')
  // add 'effect' again
  attributes.push('effect')

  return attributes
}

export default scrapeSpells
