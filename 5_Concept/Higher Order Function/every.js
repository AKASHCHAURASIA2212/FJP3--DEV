const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
// return true if any 1 value is satisfied condition
let deposit = transactions.every(function (n) {
    return n > 0
})

console.log(deposit)