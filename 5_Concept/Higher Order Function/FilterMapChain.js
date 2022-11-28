let arr = [
    { name: "A", age: 14, gender: "M" },
    { name: "B", age: 34, gender: "M" },
    { name: "C", age: 24, gender: "F" },
    { name: "D", age: 44, gender: "F" },
    { name: "E", age: 44, gender: "M" },
    { name: "I", age: 28, gender: "F" },
    { name: "G", age: 36, gender: "M" },
    { name: "H", age: 47, gender: "F" }]


// Q1 --> Age of all the ladies

let ladies = arr.filter(function (obj) {
    if (obj.gender == "F") {
        return true
    } else {
        return false;
    }
}).map(function (n) {   // <-- function chaining
    return n.age
})
console.log(ladies)
// let lages = ladies.map(function (n) {
//     return n.age
// })
// console.log(lages);

