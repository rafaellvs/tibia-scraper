import axios from 'axios'
import cheerio from 'cheerio'

import { formatAttribute } from '../../helpers/utils.js'

const scrapeDefault = async url => {
  const html = await axios(`https://tibia.fandom.com/wiki/${url}`)
    .then(response => response.data)
  const $ = cheerio.load(html)

  // get table header cells
  const htmlTh = $('.wikitable th')
  htmlTh.find('p').remove()

  // each th into array
  const attributes = []
  htmlTh.each(function (i, elem) {
    attributes.push(
      $(this).text().replace(/\n/g, '')
    )
  })

  // format attributes
  const formatted = attributes.map(att => formatAttribute(att))

  // remove duplicates
  const noDuplicates = new Set(formatted)

  return [...noDuplicates]
}

export default scrapeDefault
