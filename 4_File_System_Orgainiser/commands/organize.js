let fs = require('fs');

let path = require('path')



function organiseFn(dirpath) {

    let destPath;
    console.log(dirpath);  // test folder path --> // D:\VS-CODE\FJP3 DEV\4_File_System_Orgainiser\Test Folder

    if (dirpath == undefined) {
        console.log('Enter Valid Path')
    }
    else {
        let doesExiest = fs.existsSync(dirpath)       // is dirpath per test folder exiest karta hai ya nahi
        // console.log(doesExiest)


        if (doesExiest == true) {                               // agar karta hai tho destpath jha ab organise folder bnana hai wo bnayenge 
            destPath = path.join(dirpath, 'organized_files');
            //  destPath = __dirname+'orgainzed file';
            // node js kehta hai nai file bnane se pehle hme uska path bnana hoga 
            // path bnanae ke baad hi hum wo file bna sakte hai 


            if (fs.existsSync(destPath) == false) {
                fs.mkdirSync(destPath)
            }
            else {
                console.log('Folder Exiest');
            }
        }
        else {
            console.log('enter valid path');
        }
    }

    orgainzeHelper(dirpath, destPath);
    // dirpath --> test folder's path
    // destPath--> organized folder's Path

}
// we are writing this function to categories our files

function orgainzeHelper(src, dest) {
    let childNames = fs.readdirSync(src);
    // get all the file and folder inside your src
    console.log(childNames);

    for (let i = 0; i < childNames.length; i++) {

        let childAddress = path.join(src, childNames[i]);
        // console.log(childAddress);

        let isFile = fs.lstatSync(childAddress).isFile();
        // console.log(childAddress+" --> "+isFile);

        if (isFile == true) {
            let fileCategory = getCategory(childNames[i]);

            // console.log(childNames[i]+" belongs to "+fileCategory);

            sendFiles(childAddress, dest, fileCategory);
        }


    }
}

function getCategory(name) {
    let ext = path.extname(name);
    // console.log(ext);
    ext = ext.slice(1);
    //we will take out the extension name of the files
    // console.log(ext);

    for (let type in types) {
        let ctypeArr = types[type]
        // console.log(ctypeArr);

        for (let i = 0; i < ctypeArr.length; i++) {
            if (ext == ctypeArr[i]) {
                // we matched the extension with the value present in ctype arr
                return type;
            }
        }
    }

    return 'others';

}

function sendFiles(srcFilePath, dest, fileCategory) {

    let catPath = path.join(dest, fileCategory);

    // console.log("sendfiles--> "+catPath) 

    // checking for category folder path
    if (fs.existsSync(catPath) == false) {
        fs.mkdirSync(catPath);
    }


    let filesName = path.basename(srcFilePath);
    // we took out the file name

    // console.log("sendfiles -> "+filesName);

    let destFilePath = path.join(catPath, filesName);
    // here we created a path for the files in category folders

    fs.copyFileSync(srcFilePath, destFilePath)
    // copy files from src to dest

    fs.unlinkSync(srcFilePath);
    // deleting the files from src

    console.log(filesName + " is copy to " + fileCategory);

}

module.exports={
    organizeKey : organiseFn
}

