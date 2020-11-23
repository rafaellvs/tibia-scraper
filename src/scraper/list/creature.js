import axios from 'axios'
import cheerio from 'cheerio'

import scrapeSingleCreature from '../single/creature.js'

const scrapeCreatureList = async url => {
  const basePath = 'https://tibia.fandom.com/wiki/'
  const path = basePath + url

  const html = await axios(path)
    .then(response => response.data)
    .catch(console.error)

  const $ = cheerio.load(html)
  const table = $('.wikitable')

  // remove every thead from table
  const th = table.find('th')
  th && table.find('th').parent().remove()

  // get each row in url data table
  const htmlRows = table.find('tr')
  const names = []
  htmlRows.each(function (i, tr) {
    const href = $(tr).find('td').first().find('a').attr('href')
    const name = href ? href.replace('/wiki/', '') : null
    name && names.push(name)
  })

  const creatures = await Promise.all(
    names.map(name => scrapeSingleCreature(name))
  )

  return creatures
}

export default scrapeCreatureList
