import scrapeSpells from './spells.js'
import scrapeWithLoot from './with-loot.js'
import scrapeDefault from './default.js'

const scrapeData = url => {
  if (url === 'Spells') return scrapeSpells()
  if (url === 'List_of_Creatures' || url === 'Bosses') return scrapeWithLoot(url)

  return scrapeDefault(url)
}

export default scrapeData
