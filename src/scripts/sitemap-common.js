const _ = require('lodash')
const fs = require('fs')
const globby = require('globby')
const prettier = require('prettier')

const pages = require('../pages.json')

console.log(pages.home.title)

const getDate = new Date().toISOString()

const DOMAIN = 'https://yankeedahliasociety.com'

const formatted = (sitemap) => prettier.format(sitemap, { parser: 'html' })

;(async () => {
    const pagesSitemap = `
    ${_.map(pages, (page) => {
        if (page.inSitemap) {
            return `
          <url>
            <loc>${DOMAIN}${page.path}</loc>
            <lastmod>${getDate}</lastmod>
          </url>
        `
        } else {
            return null
        }
    }).join('')}
  `

    const generatedSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${pagesSitemap}
    </urlset>
  `

    const formattedSitemap = [formatted(generatedSitemap)]

    fs.writeFileSync('public/sitemap.xml', formattedSitemap, 'utf8')
})()
