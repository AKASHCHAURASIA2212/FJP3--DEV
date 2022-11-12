// File System Module

const fs = require('fs');

console.log('-------------file system module------------')

// **** Files **** //

// we will be reading , writting , updating , deleting files

//---------------------------------------------

// 1. reading

//  let content = fs.readFileSync('f1.txt')

//  console.log("f1 txt data -> "+content)


//---------------------------------------------

// 2.writting

// // if file not exist it will create new file and write data in it

//  fs.writeFileSync('f2.txt','we are amazingg !!!')

//  fs.writeFileSync('f3.txt','it create f3.txt new file !!!')

//----------------------------------------------

// 3. append file or update

// fs.appendFileSync("f2.txt",'new data for f2');

//----------------------------------------------

// 4.delete

// fs.unlinkSync('f2.txt');

// console.log("f2 deleted")

//---------------------------------------------

// ********* Directories ***********//

//------------------------------------
// 1. creating a directory

// mkdirsync method used to create new folder or directory
let pt = 'D:\\VS-CODE\\FJP3 DEV\\4_File_System_Orgainiser\\mydir4'
fs.mkdirSync(pt)

// console.log('folder created');

//--------------------------------------

// 2. deleting folder or directory

// fs.rmdirSync('mydir1')

// console.log('folder deleted');

//-------------------------------------

// 3. to check dir exiest or not

// let exiest = fs.existsSync('mydir1');

// console.log(exiest);

// ------------------------------------

// 4. status of dir

// let statsOfDir = fs.lstatSync('mydir1');

// console.log(statsOfDir)

// console.log("is File ? " , statsOfDir.isFile())

// console.log("is Folder ? " , statsOfDir.isDirectory())

//--------------------------------------

// 5. read folder or readdirSync

// let folderpath = 'D:\\VS-CODE\\FJP3 DEV\\3_Node\\mydir1'

// let foldercontent  = fs.readdirSync(folderpath)

// console.log(foldercontent);

//----------------------------------------
//***********Path Module****************/

const path = require('path');

console.log('-------------Path module------------')

//--------------------------------------------------

// 1. Copying files between diffrent folder 

// src path , dest path

let srcFilePath = 'D:\\VS-CODE\\FJP3 DEV\\3_Node\\mydir1\\f4.txt'
// let srcFilePath = 'D:\\VS-CODE\\FJP3 DEV\\3_Node\\mydir1\\mydir3'

let destinationPath = 'D:\\VS-CODE\\FJP3 DEV\\3_Node\\mydir2'

let tobeCopiedFileName = path.basename(srcFilePath)

console.log(tobeCopiedFileName);

let destPath = path.join(destinationPath,tobeCopiedFileName);

console.log(destPath);

fs.copyFileSync(srcFilePath,destPath);

console.log('file copied');


