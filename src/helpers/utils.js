// converts attributes to snake_case and deals with edge cases
export const formatAttribute = string => {
  if (string === 'NPC') return 'npc_price'

  return string
    ? string.replace(/\n/g, '').replace(/\./g, '').replace(/\s/g, '_').replace(/%/g, '_mod').toLowerCase()
    : 'image'
}

export const handleImage = string =>
  string && string.match(/https:.*?"/)[0].replace(/"|amp;/g, '')

// scraper gets a string like 'ElfOrcOrc SpearmanTroll-Trained Salamander'
// this treats it
export const handleDroppedBy = string => {
  const droppedBy = string
    .replace(/([a-z])([A-Z])/g, '$1,$2')
    .trim()
    .split(',')

  return (
    droppedBy[0] === 'This item is not dropped by any creatures.'
      ? null
      : droppedBy
  )
}

export const handleLoot = array => {
  if (!Array.isArray(array)) return null

  const loot = array.map(item => item.trim())
  return (
    array[0] === 'This creature drops no loot.'
      ? null
      : loot
  )
}

// format item data edge cases
export const handleItemData = (attribute, value) => {
  if (attribute === 'dropped_by') return handleDroppedBy(value)
  else if (attribute === 'image') return handleImage(value)
  else if (attribute === 'loot') return handleLoot(value)

  return value || null
}
