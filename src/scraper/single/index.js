import scrapeSingleItem from './item.js'
import scrapeSingleCreature from './creature.js'

const scrapeSingle = (url, name) => {
  switch (url) {
    case 'List_of_Creatures':
    case 'Bosses':
      return scrapeSingleCreature(name)

    case 'Spells':
      return null

    default:
      return scrapeSingleItem(name)
  }
}

export default scrapeSingle
