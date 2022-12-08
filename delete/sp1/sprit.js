const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs');
const path = require('path')
const https = require('https')


// let url = 'https://www.spriters-resource.com/psp/moemoenijitaisenryakuchu/'


// let url = 'https://www.spriters-resource.com/nintendo_switch/thequintessentialquintupletssummermemoriesalsocomeinfive/'

let url = 'https://www.spriters-resource.com/mobile/puellamagimadokamagicasidestorymagiarecord/'


request(url, function (err, response, html) {
    if (err) {
        console.log(err);
    } else {
        ExtractCardAllCardsLinks(html);
    }
})

function ExtractCardAllCardsLinks(html) {
    let $ = cheerio.load(html);

    //--------------------------------------------------

    // here i create a folder which store all subfoler of cards the name of folder is scrap from that page

    let folname = $('.rowheader .noborder');
    folname = $(folname[0]).text().trim();
    // console.log(folname);

    // let folpath = path.join(__dirname, folname);
    let folpath = path.join(__dirname, "f3");

    // console.log(folpath)

    if (fs.existsSync(folpath) == false) {
        fs.mkdirSync(folpath)
    }

    //--------------------------------------------------

    // here allCards links is extrected using scraping
    let AllCarsLinks = $('.updatesheeticons a');
    // console.log(AllCarsLinks.length);

    for (let i = 0; i < AllCarsLinks.length; i++) {
        AllCarsLinks[i] = $(AllCarsLinks[i]).attr('href');
        AllCarsLinks[i] = "https://www.spriters-resource.com/" + AllCarsLinks[i];
        // console.log(AllCarsLinks[i]);

        DownloadCardLink(AllCarsLinks[i]);
    }



    // DownloadCardLink('https://www.spriters-resource.com//master_system/alexkiddmw/sheet/51712/')
}

function DownloadCardLink(url2) {
    request(url2, function (err, response, html) {
        if (err) {
            console.log(err)
        } else {
            DownloadCard(html)
        }
    })
}

function DownloadCard(html) {
    let $ = cheerio.load(html);

    let Alltr = $('tbody tr');
    // Alltr = Alltr[0];

    let Folname = $(Alltr[2]).find('td')
    let SubFolname = $(Alltr[3]).find('td');

    Folname = $(Folname[1]).text().trim()
    SubFolname = $(SubFolname[1]).text().trim()

    // console.log(Folname);
    // console.log(SubFolname);

    // let folpath = path.join(__dirname, Folname);
    let folpath = path.join(__dirname, "f3");

    // console.log(folpath)
    let subFolpath = path.join(folpath, SubFolname);
    // console.log(subFolpath)

    if (fs.existsSync(subFolpath) == false) {
        fs.mkdirSync(subFolpath);
    }

    let downloadLink = $(Alltr[9]).find('a')
    downloadLink = $(downloadLink).attr('href');
    downloadLink = "https://www.spriters-resource.com/" + downloadLink
    // console.log(downloadLink)

    // FinalDownload(downloadLink, subFolpath);
    MoveFile(subFolpath)

}


function MoveFile(subFolpath) {
    console.log('=============MoveFile============')
    let folPath = __dirname
    let folContent = fs.readdirSync(folPath)
    let folname = path.basename(subFolpath)
    // console.log(folname)
    // console.log(folContent)

    for (let i = 0; i < folContent.length; i++) {
        if (folContent[i].includes(folname)) {
            console.log(i);
            let srcFilePath = path.join(__dirname, folContent[i]);
            // console.log("Src=>", srcFilePath);

            let destFilePath = path.join(subFolpath, folContent[i])
            // console.log("Dest+>", destFilePath)

            fs.copyFileSync(srcFilePath, destFilePath)
            fs.unlinkSync(srcFilePath)
        }
    }
}
let i = 1
let j = 1
function FinalDownload(url3, subFolpath) {

    console.log('==========FinalDownload=========', i)
    i++
    let filename = path.basename(subFolpath)
    let middlename = path.basename(url3);
    filename = filename + middlename + ".png"

    https.get(url3, function (res) {
        const fileStrean = fs.createWriteStream(filename)
        res.pipe(fileStrean);

        fileStrean.on("error", function (err) {
            console.log(err)
            console.log("error occur!!!")
        })

        fileStrean.on("finish", function () {
            fileStrean.close();
            console.log("done!!!", j)
            j++

        })
    })

}

