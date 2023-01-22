const functions = require('@google-cloud/functions-framework');
const puppeteer = require('puppeteer')

functions.http('puppeteer-sample-function', async (req, res) => {

    const browser = await puppeteer.launch()
  
    const page = await browser.newPage()
  
    await page.goto('https://en.wikipedia.org/wiki/%22Hello,_World!%22_program')
  
    const firstPar = await page.$eval('.mw-page-title-main', el => el.innerText)
    
    await browser.close()

    res.send(firstPar)
})
