const url = 'https://www.espncricinfo.com/series/indian-premier-league-2022-1298423'

const request = require('request')
const cheerio = require('cheerio')
const allMatchObj = require('./AllMatch')
request(url, cb)

function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        // console.log(html);
        extrectLink(html)

    }
}

function extrectLink(html) {
    let $ = cheerio.load(html)
    let linkElement = $('.ds-border-t.ds-border-line.ds-text-center.ds-py-2 .ds-inline-flex.ds-items-start.ds-leading-none')
    // console.log(linkElement.length);
    let ancherElem = linkElement[0];
    // console.log(ancherElem)
    let link = $(ancherElem).attr('href')
    // console.log(link)

    let fulllink = 'https://www.espncricinfo.com/' + link
    console.log(fulllink)  // view all result 


    allMatchObj.getAllMatch(fulllink);
}
