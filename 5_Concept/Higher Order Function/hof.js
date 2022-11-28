// a function that recieves a function as an argument or return the function as output

// let arr = [2, 4, 3, 5, 7, 9, 7, 18, 13, 14, 12]

// Map is itself a function
// map takes a callback finction as many times as the elements in the array
// map will process every value and will apply the instruction that the callback function
//map return a new array


function squre(num) {
    return num * num;
}

// arr = arr.map(squre)
// console.log(arr);

// let Name = ['akash', 'rahul', 'shivam']

// Name.map(function (x) {
//     console.log(x);
// })


// split and join

let str = 'pepcoder'

let partstr = str.split('c')

console.log(partstr)

// join

let joinstr = partstr.join('c')
console.log(joinstr)