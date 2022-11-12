// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders

//js mein input Array ke from mein jaata hai and that is array is process.argv Array

const helpModule = require('./commands/help')

const treeModule = require('./commands/tree')

const organiseModule = require('./commands/organize')



const fs = require('fs');
const { dirname } = require('path');
const path = require('path');

let inputArr = process.argv.slice(2);
let command = inputArr[0];
// console.log(command);


let types = {
    media: ["mp4", "mkv", "mp3", "jpg", "bmp"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: ["docx",
        "doc",
        "pdf",
        "xlsx",
        "xls",
        "odt",
        "ods",
        "odp",
        "odg",
        "odf",
        "txt",
        "ps",
        "tex",
        "pptx"],
    app: ["exe", "dmg", "pkg", "deb"],
};

switch (command) {

    case 'tree':
        treeModule.treeKey(inputArr[1]);
        break;
    case 'organize':
        organiseModule.organizeKey(inputArr[1]);
        break;
    case 'help':
        helpModule.helpKey();
        break;
    default:
        // console.log('Please Enter a valid command')

}
















// switch (command) {

//     case 'tree':
//         // console.log('tree implimented')
//         // treefn(inputArr[1])
//         tree.treeKey(inputArr[1]);
//         break;
//     case 'organise':
//         // console.log('organise file')
//         // organise(inputArr[1])
//         organise.organizeKey(inputArr[1]);
//         break;
//     case 'help':
//         // console.log('help')
//         // helpfn()
//         help.helpKey();
//         break;
//     default:
//         console.log('Please Enter a valid command')

// }


// function helpfn() {
//     console.log(`List of all the Commands -
//                    1) Tree Command - node FO.js tree <dirname> 
//                    2) Organise Command - node FO.js organise <dirname> 
//                    3) Help Command - node FO.js help`)
// }

// function organiseFn(dirpath) {

//     let destPath;
//     console.log(dirpath);  // test folder path --> // D:\VS-CODE\FJP3 DEV\4_File_System_Orgainiser\Test Folder

//     if (dirpath == undefined) {
//         console.log('Enter Valid Path')
//     }
//     else {
//         let doesExiest = fs.existsSync(dirpath)       // is dirpath per test folder exiest karta hai ya nahi
//         // console.log(doesExiest)


//         if (doesExiest == true) {                               // agar karta hai tho destpath jha ab organise folder bnana hai wo bnayenge 
//             destPath = path.join(dirpath, 'organized_files');
//             //  destPath = __dirname+'orgainzed file';
//             // node js kehta hai nai file bnane se pehle hme uska path bnana hoga 
//             // path bnanae ke baad hi hum wo file bna sakte hai 


//             if (fs.existsSync(destPath) == false) {
//                 fs.mkdirSync(destPath)
//             }
//             else {
//                 console.log('Folder Exiest');
//             }
//         }
//         else {
//             console.log('enter valid path');
//         }
//     }

//     orgainzeHelper(dirpath, destPath);
//     // dirpath --> test folder's path
//     // destPath--> organized folder's Path

// }
// // we are writing this function to categories our files

// function orgainzeHelper(src, dest) {
//     let childNames = fs.readdirSync(src);
//     // get all the file and folder inside your src
//     console.log(childNames);

//     for (let i = 0; i < childNames.length; i++) {

//         let childAddress = path.join(src, childNames[i]);
//         // console.log(childAddress);

//         let isFile = fs.lstatSync(childAddress).isFile();
//         // console.log(childAddress+" --> "+isFile);

//         if (isFile == true) {
//             let fileCategory = getCategory(childNames[i]);

//             // console.log(childNames[i]+" belongs to "+fileCategory);

//             sendFiles(childAddress, dest, fileCategory);
//         }


//     }
// }

// function getCategory(name) {
//     let ext = path.extname(name);
//     // console.log(ext);
//     ext = ext.slice(1);
//     //we will take out the extension name of the files
//     // console.log(ext);

//     for (let type in types) {
//         let ctypeArr = types[type]
//         // console.log(ctypeArr);

//         for (let i = 0; i < ctypeArr.length; i++) {
//             if (ext == ctypeArr[i]) {
//                 // we matched the extension with the value present in ctype arr
//                 return type;
//             }
//         }
//     }

//     return 'others';

// }

// function sendFiles(srcFilePath, dest, fileCategory) {

//     let catPath = path.join(dest, fileCategory);

//     // console.log("sendfiles--> "+catPath) 

//     // checking for category folder path
//     if (fs.existsSync(catPath) == false) {
//         fs.mkdirSync(catPath);
//     }


//     let filesName = path.basename(srcFilePath);
//     // we took out the file name

//     // console.log("sendfiles -> "+filesName);

//     let destFilePath = path.join(catPath, filesName);
//     // here we created a path for the files in category folders

//     fs.copyFileSync(srcFilePath, destFilePath)
//     // copy files from src to dest

//     fs.unlinkSync(srcFilePath);
//     // deleting the files from src

//     console.log(filesName + " is copy to " + fileCategory);

// }

// function treefn(dirpath) {

//     if (dirpath == undefined) {
//         console.log('Please enter a Valid command')
//     }
//     else {
//         let doesExiest = fs.existsSync(dirpath);

//         if (doesExiest == true) {
//             treeHelper(dirpath, " ");
//         } else {
//             console.log("Path not Exiest");
//         }
//     }
// }

// function treeHelper(targetPath, indent) {
//     let isFile = fs.lstatSync(targetPath).isFile();

//     if (isFile == true) {
//         let fileName = path.basename(targetPath);
//         console.log(indent + "├── " + fileName); // tree command symbol
//     } else {
//         let dirname = path.basename(targetPath);
//         console.log(indent + "└── " + dirname);

//         let children = fs.readdirSync(targetPath);
//         // console.log(children)

//         for (let i = 0; i < children.length; i++) {
//             let childpath = path.join(targetPath, children[i]);
//             treeHelper(childpath, indent + '\t');
//         }
//     }

// }