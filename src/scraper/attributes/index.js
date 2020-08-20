import scrapeSpells from './spells.js'
import scrapeDefault from './default.js'

const scrapeAttributes = url => {
  if (url === 'Spells') return scrapeSpells()

  return scrapeDefault(url)
}

export default scrapeAttributes
