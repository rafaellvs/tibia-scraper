import axios from 'axios'
import cheerio from 'cheerio'

import { formatString, handleCheckmark } from '../../helpers/utils.js'

const scrapeSingleCreature = async name => {
  const path = `https://tibia.fandom.com/wiki/${name}`

  const html = await axios(path)
    .then(response => response.data)
    .catch(console.error)

  const $ = cheerio.load(html)

  // name
  const creatureName = $('#firstHeading').text()

  // image
  const image = $('#twbox-image img').attr('data-src')

  // creature look
  const look = $('.creature-look').text()

  // sounds
  const htmlSounds = $('.sound-list li')
  const sounds = []
  htmlSounds.each(function (i, li) {
    sounds.push($(li).text())
  })

  // tibia library description
  const htmlDescription = $('.webdesc')
  htmlDescription.find('.webdesc-from').remove()
  const description = formatString(htmlDescription.text())

  // wiki notes about entity
  const htmlNotes = $('#creature-notes')
  htmlNotes.find('h3').remove()
  htmlNotes.find('.webdesc').remove()
  htmlNotes.find('.spoiler-container').remove()
  const notes = formatString(htmlNotes.text())

  // abilities
  const htmlAbilities = $('#creature-abilities')
  htmlAbilities.find('h3').remove()
  const abilities = formatString(htmlAbilities.text())

  // location
  const htmlLocation = $('#creature-location')
  htmlLocation.find('h3').remove()
  const location = formatString(htmlLocation.text())

  // behaviour
  const htmlBehaviour = $('#creature-behaviour')
  htmlBehaviour.find('h3').remove()
  const behaviour = formatString(htmlBehaviour.text())

  // behaviour
  const htmlStrategy = $('#creature-strategy')
  htmlStrategy.find('h3').remove()
  const strategy = formatString(htmlStrategy.text())

  // general properties
  const properties = { bestiary: {}, elemental: {} }
  const htmlProperties = $('#tabular-data')
  htmlProperties.find('tr').each(function (i, tr) {
    const property = $(tr).find('.property').text()
    const value = $(tr).find('.value').html()

    if (property.includes('Health')) { properties.health = formatString(value) }
    if (property.includes('Experience')) { properties.exp = formatString(value) }
    if (property.includes('Speed')) { properties.speed = formatString(value) }
    if (property.includes('Armor')) { properties.armor = formatString(value) }
    if (property.includes('Summon')) { properties.summon = formatString(value) }
    if (property.includes('Convince')) { properties.convince = formatString(value) }
    if (property.includes('Classification')) { properties.classification = formatString(value) }
    if (property.includes('Class')) { properties.class = formatString(value) }
    if (property.includes('Difficulty')) { properties.bestiary.difficulty = $(value).attr('title') }
    if (property.includes('Occurrence')) { properties.bestiary.occurrence = $(value).attr('title') }
    if (property.includes('Charm')) { properties.bestiary.charm = formatString(value) }
    if (property.includes('Kills')) { properties.bestiary.kills = formatString(value) }
    if (property.includes('Physical')) { properties.elemental.physical = formatString(value) }
    if (property.includes('Earth')) { properties.elemental.earth = formatString(value) }
    if (property.includes('Fire')) { properties.elemental.fire = formatString(value) }
    if (property.includes('Death')) { properties.elemental.death = formatString(value) }
    if (property.includes('Energy')) { properties.elemental.energy = formatString(value) }
    if (property.includes('Holy')) { properties.elemental.holy = formatString(value) }
    if (property.includes('Ice')) { properties.elemental.ice = formatString(value) }
    if (property.includes('Heal')) { properties.elemental.heal = formatString(value) }
    if (property.includes('Drain')) { properties.elemental.life_drain = formatString(value) }
    if (property.includes('Drown')) { properties.elemental.drown = formatString(value) }
    if (property.includes('Paralysable')) { properties.paralysable = handleCheckmark(formatString(value)) }
    if (property.includes('Senses')) { properties.inv_sense = handleCheckmark(formatString(value)) }
    if (property.includes('Runs')) { properties.runs_at = formatString(value) }
    if (property.includes('Walks around')) { properties.walks_around = value.replace(/<br>/g, ', ') }
    if (property.includes('Walks through')) { properties.walks_through = value.replace(/<br>/g, ', ') }
  })

  // loot table
  const loot = []
  $('.loot-table li').each(function (i, li) {
    loot.push($(li).text())
  })

  const creature = {
    name: creatureName,
    image,
    look,
    sounds,
    description,
    notes,
    abilities,
    location,
    behaviour,
    strategy,
    ...properties,
    loot,
  }

  console.log(`Scraped ${name}`)
  return creature
}

export default scrapeSingleCreature
