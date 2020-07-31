import axios from 'axios'
import cheerio from 'cheerio'

import { formatAttribute } from '../helpers/utils.js'

const scrapeAttributes = async url => {
  const html = await axios(`https://tibia.fandom.com/wiki/${url}`)
    .then(response => response.data)
  const $ = cheerio.load(html)

  const thead = $('.wikitable tr').first()
  thead.find('p').remove()
  const attributes =
    thead.text()
      .split(/\n/g)
      .slice(1, -1)

  // remove duplicates
  const noDuplicates = new Set(attributes)

  return [...noDuplicates].map(att => formatAttribute(att))
}

export default scrapeAttributes
