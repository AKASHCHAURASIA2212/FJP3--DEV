//From the Transactions Array filter out positive Elements and Calculate the total amount
//Use filter and Reduce to Achieve this

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500]

let sum = transactions.filter((x) => {
    return x > 0;
}).reduce((sum, val) => {
    return sum + val;
}, 0)

console.log(sum)
