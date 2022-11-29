const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595'

const request = require('request')
const cheerio = require('cheerio')

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
    let linkElement = $('.ds-inline-flex.ds-items-start.ds-leading-none')
    // console.log(linkElement.length);
    let ancherElem = linkElement[35];
    // console.log(ancherElem)
    let link = $(ancherElem).attr('href')
    // console.log(link)

    let fulllink = 'https://www.espncricinfo.com/' + link
    console.log(fulllink)  // view all result 


    getAllMatcheScoreCard(fulllink);
}

function getAllMatcheScoreCard(url2) {
    request(url2, cb2)
}

function cb2(err, response, html) {
    if (err) {
        console.log(err)
    } else {
        let $ = cheerio.load(html);
        let AllMatchScoreCard = $('.ds-no-tap-higlight')
        // console.log(AllMatchScoreCard.length)
        let j = 1;
        let allScore = []
        for (let i = 0; i < AllMatchScoreCard.length; i++) {
            allScore[i] = $(AllMatchScoreCard[i]).attr('href');
            // console.log($(AllMatchScoreCard[i]).attr('href'), j)
            j++;
        }

        allScore = allScore.filter(function (x) {
            return x !== undefined;
        });

        allScore = [...new Set(allScore)];
        allScore = allScore.filter(function (x) {
            return x.includes('ipl');
        })

        allScore = allScore.map(function (x) {
            return 'https://www.espncricinfo.com/' + x;
        })

        console.log(allScore)
        // console.log(allScore.length)

    }
}


//
// console.log(Arr.length)
// let data = selTool(Arr[0]).text();
// console.log(data)