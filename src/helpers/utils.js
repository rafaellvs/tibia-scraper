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

// strip html tags
export const stripHtml = string =>
  string
    .replace(/(<([^>]+)>)/g, '')
    .replace('&apos;', '\'')
    .replace('\n', '')

// handle name - removes <a> tag
export const handleName = string =>
  stripHtml(string)

export const handleImage = string =>
  string.trim() && string.match(/https:.*?"/)[0].replace(/"|amp;/g, '')

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

export const handleEffect = string =>
  stripHtml(string)

export const handlePrem = string =>
  string === '\u2713' ? 'yes' : 'no'

// format item data edge cases
export const handleItemData = (attribute, value) => {
  switch (attribute) {
    case 'name':
      return handleName(value)

    case 'dropped_by':
      return handleLootTable(value)

    case 'image':
      return handleImage(value)

    case 'loot':
      return handleLootTable(value)

    case 'effect':
      return handleEffect(value)

    case 'prem':
      return handlePrem(value)

    default:
      return value ? stripHtml(value).trim() : null
  }
}
