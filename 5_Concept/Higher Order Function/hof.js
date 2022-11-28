// a function that recieves a function as an argument or return the function as output

let arr = [2, 4, 3, 5, 7, 9, 7, 18, 13, 14, 12]

// Map is itself a function
// map takes a callback finction as many times as the elements in the array
// map will process every value and will apply the instruction that the callback function
//map return a new array


function squre(num) {
    return num * num;
}

arr = arr.map(squre)
// console.log(arr);

let Name = ['akash', 'rahul', 'shivam']

Name.map(function (x) {
    // console.log(x);
})


// split function split a string according to passed parameter and will return the left and right part in an array

let str = 'pepcoder'

let partstr = str.split('c')

// console.log(partstr)

// join function will take an array and it will fill the parameter after each element of the array with the passed parameter and will return the complete str

let joinstr = partstr.join('c')
// console.log(joinstr)

let nameArr = ['akash chaurasia', 'rahul varma', 'sakshi sharma']

let fName = nameArr.map(function (x) {
    let arr = x.split(' ');
    return arr[0];
})
let lName = nameArr.map(function (x) {
    let arr = x.split(' ');
    return arr[1];
})
// console.log(fName)
// console.log(lName)

// Quetion1 

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const inrtToUsd = 74;

let rupee = transactions.map(function (x) {
    return x * inrtToUsd
})

// console.log(rupee)


// filter 
// * Filter returns a new array containing array elements that matches a specified condition
// if the condition stands true it will filter out those elements and will presemt them in a new 
//Array

let arr2 = [2, 3, 4, 5, 6, 7, 8, 9, 13, 23, 34, 45]
// we need to take out even no from arr

let evenArr = arr2.filter(function (n) {
    return n % 2 == 0
})

// console.log(evenArr)

// Quetion2
const transactions2 = [1000, 3000, 4000, 2000, -898, 3800, -4500];

let profit = transactions2.filter(function (n) {
    return (n > 0)
})

// console.log(profit)