const request = require('request')
const cheerio = require('cheerio')
const scorecardObj = require('./scoreCard')
const { ps } = require('./scoreCard')

function getAllMatcheLink(url2) {
    request(url2, cb2)
}

function cb2(err, response, html) {
    if (err) {
        console.log(err)
    } else {
        let $ = cheerio.load(html);
        let AllMatchScoreCardLink = $('.ds-no-tap-higlight')
        console.log(AllMatchScoreCardLink.length)
        let j = 1;
        let allScore = []
        for (let i = 0; i < AllMatchScoreCardLink.length; i++) {
            allScore[i] = $(AllMatchScoreCardLink[i]).attr('href');
            // console.log($(AllMatchScoreCard[i]).attr('href'), j)
            // j++;
        }

        // allScore = allScore.filter(function (x) {
        //     return x !== undefined;
        // });

        // console.log(allScore.length)

        allScore = [...new Set(allScore)];
        allScore = allScore.filter(function (x) {
            return x.includes('indian-premier-league');
        })
        // console.log(allScore)
        console.log(allScore.length)

        let fulllinkArr = []
        fulllinkArr = allScore.map(function (x) {
            return 'https://www.espncricinfo.com/' + x;
        })

        for (let j = 0; j < fulllinkArr.length; j++) {
            scorecardObj.ps(fulllinkArr[j])
            console.log(j);
        }

        // console.log(fulllinkArr)
        // console.log(allScore.length)

    }
}


module.exports = {
    getAllMatch: getAllMatcheLink
}