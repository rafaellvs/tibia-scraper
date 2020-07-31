import axios from 'axios'
import cheerio from 'cheerio'

const scrape = async () => {
  const html = await axios('https://tibia.fandom.com/wiki/Main_Page')
    .then(response => response.data)
  const $ = cheerio.load(html)

  const htmlMenu = $('.wds-tabs').children().first().find('a')

  const menu = []
  htmlMenu.each(function (i, elem) {
    menu.push(
      $(this).text().replace(/\n|\t/g, '')
    )
  })
  console.log(menu)
}

scrape()
