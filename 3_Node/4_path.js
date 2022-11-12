//***********Path Module****************/

const path = require('path');

console.log('-------------Path module------------')


// 1. path.extname get the extension of the file

let ext = path.extname('D:\\VS-CODE\\FJP3 DEV\\3_Node\\f1.txt')
let ext2 = path.extname('D:\\VS-CODE\\FJP3 DEV\\2_Html_Css\\final\\css.png')

console.log("Extension name -> "+ext);
console.log("Extension name -> "+ext2);

// 2. baseName

let baseName = path.basename('D:\\VS-CODE\\FJP3 DEV\\3_Node\\f1.txt');
console.log("Basename -> "+baseName);

// 3 --dirname get you the path of current directory 

console.log("dirpath --> "+__dirname);

// 4 --filename get you the path of the file are you in 

console.log("filepath --> "+__filename);

