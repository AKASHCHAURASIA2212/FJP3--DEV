// const url = 'https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/chennai-super-kings-vs-kolkata-knight-riders-1st-match-1304047/full-scorecard'

let xlsx = require('xlsx')

function processScoreCard(url) {
    request(url, cb3);
}
// venue date teamname opponent result



let request = require('request')
let cheerio = require('cheerio')

// request(url, cb3)

function cb3(err, response, html) {
    if (err) {
        console.log(err);
    }
    else {
        getMatchDetails(html);
    }
}

function getMatchDetails(html) {
    let $ = cheerio.load(html)

    let venue = $('.ds-text-tight-m.ds-font-regular.ds-text-ui-typo-mid').text()
    // console.log(typeof venue)
    venue = venue.split(',');
    let MatchNo = venue[0]
    let Place = venue[1]
    let date = venue[2] + "," + venue[3]

    console.log(MatchNo)
    console.log(Place)
    console.log(date)

    let result = $('.ds-text-tight-m.ds-font-regular.ds-truncate.ds-text-typo-title').text();
    console.log(result)

    // let teamArr = $('.ds-text-title-xs.ds-font-bold.ds-capitalize');
    // let team1 = $(teamArr[0]).text()
    // let team2 = $(teamArr[1]).text()
    // console.log(team1)
    // console.log(team2)
    // console.log('-----------------------------------')

    let innings = $('.ds-rounded-lg.ds-mt-2')
    // console.log(innings)

    let htmlString = ''

    for (let i = 0; i < innings.length; i++) {
        htmlString += $(innings[i]).html()

        let Myteam = $(innings[i]).find('.ds-text-title-xs.ds-font-bold.ds-capitalize').text();

        let opponentidx = i == 0 ? 1 : 0
        let opponent = $(innings[opponentidx]).find('.ds-text-title-xs.ds-font-bold.ds-capitalize').text()

        console.log(Myteam + " vs " + opponent)
        // console.log(opponent)
        console.log('-----------------------------------')

        let cInning = $(innings[i])

        let allRows = cInning.find('.ds-w-full.ds-table.ds-table-md.ds-table-auto.ci-scorecard-table tbody tr')

        // console.log(allRows.length)

        // allRows=allRows.filter(function(row){
        //     let worthy = $(row).hasClass('')
        //     return worthy==true;
        // })

        for (let j = 0; j < allRows.length - 4; j++) {

            let allCols = $(allRows[j]).find('td')
            let isWorthy = $(allCols[0]).hasClass('.ds-hidden')
            // console.log(isWorthy)

            if (isWorthy != true) {
                if ($(allCols[0]).text().trim() == "") continue;
                // console.log($(allCols).text())
                let playerName = $(allCols[0]).text().trim()
                let runs = $(allCols[2]).text().trim()
                let balls = $(allCols[3]).text().trim()
                let fours = $(allCols[5]).text().trim()
                let sixes = $(allCols[6]).text().trim()
                let STR = $(allCols[7]).text().trim()

                console.log(`${playerName} | ${runs} | ${balls} | ${fours} | ${sixes} | ${STR}`)
                //==========================================
                processPlayer(Myteam, opponent, playerName, runs, balls, fours, sixes, STR, Place, date, result)
                //==========================================
            }



        }

        console.log('-----------------------------------')

        // console.log(htmlString)

    }
}
//============================================
const path = require('path')
const fs = require('fs')

function processPlayer(Myteam, opponent, playerName, runs, balls, fours, sixes, STR, Place, date, result) {
    let teampath = path.join(__dirname, "IPL", Myteam)
    dirCreater(teampath)

    let filePath = path.join(teampath, playerName + '.xlsx')

    let content = excelReader(filePath, playerName)

    let playerObj = {
        "teamname": Myteam,
        opponent,
        playerName,
        runs,
        balls,
        fours,
        sixes,
        STR,
        Place,
        date,
        result
    }
    content.push(playerObj);

    excelWriter(filePath, playerName, content)

}

function dirCreater(filepath) {
    if (fs.existsSync(filepath) == false) {
        fs.mkdirSync(filepath)
    }
}

function excelWriter(fileName, sheetName, jsonData) {
    let newWB = xlsx.utils.book_new();
    // Creating a new WorkBook
    let newWS = xlsx.utils.json_to_sheet(jsonData);
    // Creating new WorkSheet
    xlsx.utils.book_append_sheet(newWB, newWS, sheetName);
    xlsx.writeFile(newWB, fileName);
}


function excelReader(fileName, sheetName) {
    if (fs.existsSync(fileName) == false) {
        return [];
    }
    let wb = xlsx.readFile(fileName);
    let excelData = wb.Sheets[sheetName];
    let ans = xlsx.utils.sheet_to_json(excelData);
    // console.log(ans)
    return ans;
}
//============================================
module.exports = {
    ps: processScoreCard
}