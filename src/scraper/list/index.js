import scrapeItemList from './item.js'
import scrapeCreatureList from './creature.js'
import scrapeSpellList from './spell.js'

const scrapeData = url => {
  switch (url) {
    case 'List_of_Creatures':
    case 'Bosses':
      return scrapeCreatureList(url)
        .catch(console.error)

    case 'Spells':
      return scrapeSpellList()
        .catch(console.error)

    default:
      return scrapeItemList(url)
        .catch(console.error)
  }
}

export default scrapeData
