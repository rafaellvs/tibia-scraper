import cheerio from 'cheerio'

// converts attributes to snake_case and deals with edge cases
export const formatAttribute = string => {
  if (string.includes('NPC')) return 'npc_price'
  if (string === 'Rune Group') return 'group'
  if (string === 'Level') return 'lvl'

  return string
    ? string
      .replace(/\n/g, '')
      .replace(/\./g, '')
      .replace(/\s/g, '_')
      .replace(/%/g, '_mod')
      .toLowerCase()
    : 'image'
}

// strips html tags and special characters, inserts space after periods ('.'), trims it
export const formatString = string =>
  string
    .replace(/(<([^>]+)>)/g, '')
    .replace(/&apos;/g, '\'')
    .replace(/\n/g, '')
    .replace(/\t/g, '')
    .replace(/\.([A-Z])/g, '. $1')
    .trim()

// handle name - removes <a> tag
export const handleName = string =>
  formatString(string)

export const handleImage = string =>
  string.trim() &&
  string.match(/https:.*?"/) &&
  string.match(/https:.*?"/)[0].replace(/"|amp;/g, '')

// gets ul returned from loottable, loops through <li> and fill droppedBy array
export const handleLootTable = string => {
  const $ = cheerio.load(string)
  const lootList = $('li')
  const droppedBy = []

  lootList.each(function (i, li) {
    droppedBy.push($(li).text())
  })

  return (
    droppedBy[0] === 'This item is not dropped by any creatures.' ||
    droppedBy[0] === 'This creature drops no loot.'
      ? null
      : droppedBy
  )
}

// converts checkmarks (x or v) into bool
export const handleCheckmark = string =>
  string === '\u2713' ||
  string === '&#x2713;'

// format item data edge cases
export const handleItemData = (attribute, value) => {
  switch (attribute) {
    case 'name':
      return handleName(value)

    case 'image':
      return handleImage(value)

    case 'dropped_by':
      return handleLootTable(value)

    default:
      return value ? formatString(value) : null
  }
}
