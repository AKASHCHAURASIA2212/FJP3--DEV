const request = require('request')
const cheerio = require('cheerio')

console.log("before")


request('https://www.worldometers.info/coronavirus/', cb);

function cb(error, response, html) {
    if (error) {
        console.log(error)
        // Print the error if one occurred
    } else {
        handleHtml(html)
    }
}

function handleHtml(html) {

    const selTool = cheerio.load(html)
    // console.log(typeof selTool)
    // console.log(selTool)

    let contentArr = selTool('.maincounter-number span')

    // console.log(contentArr[0])

    let totalCases = selTool(contentArr[0]).text()
    let totalCasuality = selTool(contentArr[1]).text()
    let totalRecoverd = selTool(contentArr[2]).text()

    console.log("Total Cases ", totalCases)
    console.log("Total Casuality ", totalCasuality)
    console.log("Total Recoverd ", totalRecoverd)

}

console.log("after")