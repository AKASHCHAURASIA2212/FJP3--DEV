// #!/usr/bin/env node
let fs = require('fs')
let path = require('path')
// taking input from user
let inputArr = process.argv.slice(2)
// console.log(inputArr)
// option
let optionArr = []
let filesArr = []

for (let i = 0; i < inputArr.length; i++) {
    let charAt0 = inputArr[i].charAt(0);

    if (charAt0 == '-') {
        optionArr.push(inputArr[i])
    } else {
        filesArr.push(inputArr[i])
    }
}

//option check
let isBothPresent = optionArr.includes("-b") && optionArr.includes("-n")
if (isBothPresent) {
    console.log("errot -n and -b cannot use together")
    return
}
// existance
for (let i = 0; i < filesArr.length; i++) {
    let isFilePresent = fs.existsSync(filesArr[i])

    if (isFilePresent == false) {
        console.log("file name not correct !!!")
        return;
    }
}
// read 
let content = ""
for (let i = 0; i < filesArr.length; i++) {
    // buffer
    let buffercontent = fs.readFileSync(filesArr[i])

    if (buffercontent == false) {
        console.log("file not exiest")
    }
    content += buffercontent + '\r\n'
}
// console.log(content)
let contentArr = content.split("\r\n")
// console.log(contentArr)
let isSPresent = optionArr.includes("-s")
if (isSPresent == true) {

    for (let i = 1; i < contentArr.length; i++) {
        if (contentArr[i] == "" && contentArr[i - 1] == "") {
            contentArr[i] = null
        } else if (contentArr[i] == "" && contentArr[i - 1] == null) {
            contentArr[i] = null;
        }
    }
    let tempArr = []

    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] != null) {
            tempArr.push(contentArr[i]);
        }
    }
    contentArr = tempArr
    // console.log(contentArr)
}
let isNPresent = optionArr.includes("-n")
if (isNPresent == true) {

    for (let i = 0; i < contentArr.length; i++) {
        contentArr[i] = (i + 1) + " " + contentArr[i]
    }

    // console.log(contentArr.join("\n"))
}
let isBPresent = optionArr.includes("-b")
if (isBPresent == true) {
    count = 1;
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] != "") {
            contentArr[i] = count + " " + contentArr[i];
            count++
        }
    }

    // console.log(contentArr.join("\n"))
}

