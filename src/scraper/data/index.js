import scrapeSpells from './spells.js'
import scrapeDefault from './default.js'

const scrapeData = url => {
  if (url === 'Spells') return scrapeSpells()
  return scrapeDefault(url)
}

export default scrapeData
