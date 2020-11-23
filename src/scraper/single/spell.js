import axios from 'axios'
import cheerio from 'cheerio'

import { formatString, handleCheckmark } from '../../helpers/utils.js'

const scrapeSingleSpell = async name => {
  const path = `https://tibia.fandom.com/wiki/${name}`

  const html = await axios(path)
    .then(response => response.data)
    .catch(console.error)

  const $ = cheerio.load(html)

  // image
  const image = $('#twbox-image img').attr('src')

  const htmlInfobox = $('.portable-infobox')
  // name
  const spellName = formatString(
    htmlInfobox.find('[data-source=name]').text()
  )
  // words
  const words = formatString(
    htmlInfobox.find('[data-source=words] .pi-data-value').text()
  )
  // mana
  const mana = formatString(
    htmlInfobox.find('[data-source=mana] .pi-data-value').text()
  )
  // soul points
  const soul = formatString(
    htmlInfobox.find('[data-source=soul] .pi-data-value').text()
  )
  // damage type
  const dmgType = formatString(
    htmlInfobox.find('[data-source=damagetype] .pi-data-value').text()
  ).replace(/\sDamage/, '').toLowerCase()
  // group
  const group = formatString(
    htmlInfobox.find('[data-source=subclass] .pi-data-value').text()
  ).replace(/\sSpells/, '').replace(/Promotion/, '')
  // cooldown
  const cooldown = formatString(
    htmlInfobox.find('[data-source=cooldown] .pi-data-value').text()
  )
  // cooldown group
  const cooldownGroup = formatString(
    htmlInfobox.find('[data-source=cooldowngroup] .pi-data-value').text()
  )
  // vocation
  const vocation = formatString(
    htmlInfobox.find('[data-source=voc] .pi-data-value').text()
  ).replace(/([a-z])([A-Z])/g, '$1,$2').split(',')
  // premmium
  const premmium = handleCheckmark(
    htmlInfobox.find('[data-source=premmium] .pi-data-value').text()
  )
  // promotion
  const promotion = handleCheckmark(
    htmlInfobox.find('[data-source=promotion] .pi-data-value').text()
  )
  // lvl
  const lvl = formatString(
    htmlInfobox.find('[data-source=levelrequired] .pi-data-value').text()
  )
  // cost
  const cost = formatString(
    htmlInfobox.find('[data-source=spellcost] .pi-data-value').text()
  ).replace(/\sgp/, '')

  // effect
  const htmlEffect = $('#twbox-effect')
  htmlEffect.find('h3').remove()
  const effect = formatString(
    htmlEffect.text()
  )

  // notes
  const htmlNotes = $('#twbox-notes')
  htmlNotes.find('h3').remove()
  const notes = formatString(
    htmlNotes.text()
  )

  // history
  const htmlHistory = $('#spell-history')
  htmlHistory.find('h3').remove()
  const history = formatString(
    htmlHistory.text()
  )

  // learn from
  const learnFrom = []
  const htmlLearnFrom = $('#twbox-learnfrom .wikitable')
  htmlLearnFrom.find('th').parent().remove()
  htmlLearnFrom.find('tr').each(function (i, tr) {
    learnFrom.push({
      town: $(tr).find('td:nth-child(1)').text(),
      knight: $(tr).find('td:nth-child(2)').text(),
      druid: $(tr).find('td:nth-child(3)').text(),
      paladin: $(tr).find('td:nth-child(4)').text(),
      sorcerer: $(tr).find('td:nth-child(5)').text(),
    })
  })

  const spell = {
    name: spellName,
    words,
    image,
    lvl,
    mana,
    soul,
    dmg_type: dmgType,
    group,
    cooldown,
    cooldown_group: cooldownGroup,
    vocation,
    premmium,
    promotion,
    cost,
    effect,
    notes,
    history,
    learn_from: learnFrom,
  }

  console.log(`Scraped ${name}`)
  return spell
}

export default scrapeSingleSpell
