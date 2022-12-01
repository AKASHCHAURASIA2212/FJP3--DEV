const fs = require('fs')
const xlsx = require('xlsx')
// let buffer = fs.readFileSync('./ex.json')

let jsonFile = require('./ex.json') // requiring json file

// console.log(jsonFile)

// pushing new object into json file
jsonFile.push({
    'first name': 'Tony',
    'last name': 'Stark',
    CodeName: 'Iron-Man',
    isAvenger: true,
    age: 45,
    friends: ['steave', 'peter', 'bruce'],
    address: { city: 'Broklen', state: 'New-York' },
    weapon: 'Rice,Genius'
})


// console.log(jsonFile)

let stringdata = JSON.stringify(jsonFile)
//converting json file into string so that we can write it in other files
console.log(stringdata)

fs.writeFileSync('./ex.json', stringdata)
//writing to json file

console.log('data updated')



