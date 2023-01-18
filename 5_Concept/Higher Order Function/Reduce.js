// reduce reduces the array into single value

let arr = [1, 2, 3, 4, 5]

let sum = arr.reduce(function (sum, values) {
    return sum + values;
}, 0)

console.log(sum);


let mult = arr.reduce(function (mult, values) {
    return mult * values;
}, 1)

console.log(mult);