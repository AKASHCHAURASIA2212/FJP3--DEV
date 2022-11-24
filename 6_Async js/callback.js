// CallBack function - any function that pass as an argument to anather function is
// called callback function

// function printFname(fname, CallBack1, CallBack2) {
//     console.log(fname)
//     CallBack1("chaurasia")
//     CallBack2(18)
// }

// function printLname(lname) {
//     console.log(lname)
// }

// function printAge(age) {
//     console.log(age);
// }
// printFname("Akash", printLname, printAge)

// Synchronous way to reading file

const fs = require('fs')

// console.log(' before ')
// let data = fs.readFileSync('t1.txt')
// console.log('data-> ' + data)
// console.log(' after ')


// Asynchronous way to reading file
// readFile expect a callback
// Que : what are error first callback
// ans : those callback in which you handle error first
console.log(' before ')

fs.readFile('t1.txt', cb)
fs.readFile('t2.txt', cb)

// function cb1(err, data) {
//     if (err) {
//         console.log(err);
//     }
//     console.log('file1  ' + data);
// }

// function cb2(err, data) {
//     if (err) {
//         console.log(err);
//     }
//     console.log('file2  ' + data);
// }
let count = 1;
function cb(err, data) {
    // if (err) {
    //     console.log(err);
    // }
    console.log('' + data);
}

console.log(' after ')
