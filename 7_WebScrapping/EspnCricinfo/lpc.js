const request = require('request')
const cheerio = require('cheerio')

console.log("before")


request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary', cb);

function cb(error, response, html) {
    if (error) {
        console.log(error)
        // Print the error if one occurred
    } else {
        handleHtml(html)
    }
}

function handleHtml(html) {
    let selTool = cheerio.load(html);

    let Arr = selTool('.ds-ml-4 .first-letter');



}

console.log('after')