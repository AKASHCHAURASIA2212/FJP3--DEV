const fs = require("fs");
const pt = require('path');

let input = process.argv.splice(3);
console.log(input)


if (input[0] != '-s' && input[0] != '-n' && input[0] != '-b') {
    // display content of file
    display1(input)
} else if (input[0] == '-s') {
    // display content of multiple files
    display2(input)
} else if (input[0] == '-n') {
    // display content with number at every line
    display3(input)

} else if (input[0] == '-b') {
    display4(input)
}
else if (input[1] == '>') {
    console.log("copy content")
}

function display1(arr) {
    for (let i = 0; i < arr.length; i++) {
        let path = arr[i];
        let data = fs.readFileSync(path);
        console.log("" + data);
    }
}

function display2(arr) {
    for (let i = 1; i < arr.length; i++) {
        let path = arr[i];
        let data = (String)(fs.readFileSync(path));
        data = removeEmptyLines(data)
        console.log("" + data);
        console.log()
    }
}

function removeEmptyLines(str) {
    let mystr = str.split(/\r?\n/).filter(line => line.trim() !== '').join('\n');
    return mystr;

}

function display3(arr) {
    let pno = 0;
    for (let i = 1; i < arr.length; i++) {
        let path = arr[i];
        let data = (String)(fs.readFileSync(path));
        let dataArr = data.split("\n");
        for (let j = 0; j < dataArr.length; j++) {
            pno++;
            dataArr[j] = pno + " " + dataArr[j];
        }
        let mydata = ""
        for (let j = 0; j < dataArr.length; j++) {
            mydata += dataArr[j] + "\n";
        }
        process.stdout.write(mydata);
        pno++;
        console.log(pno)
    }
}
function display4(arr) {
    let pno = 0;
    for (let i = 1; i < arr.length; i++) {
        let path = arr[i];
        let data = (String)(fs.readFileSync(path));
        data = removeEmptyLines(data)
        let dataArr = data.split("\n");

        for (let j = 0; j < dataArr.length; j++) {
            pno++;
            dataArr[j] = pno + " " + dataArr[j];
        }
        let mydata = ""
        for (let j = 0; j < dataArr.length; j++) {
            mydata += dataArr[j] + "\n";
        }
        process.stdout.write(mydata);
        pno++;
        console.log(pno)
    }
}

function display5(fp1, fp2) {

}
// display2(input)