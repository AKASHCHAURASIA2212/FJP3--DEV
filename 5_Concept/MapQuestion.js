// const products = [
//     { name: "T-Shirt", price: 25 },
//     { name: "Headphones", price: 125 },
//     { name: "Keyboard", price: 75 },
//     { name: "Monitor", price: 200 },
// ];

// // get the number of product whose price is at least 100

// //ans1
// let countProduct = 0;
// products.map(function (obj) {
//     if (obj.price >= 100) {
//         countProduct++
//     }
// })

// //ans2
// let productAbove100 = products.map(function (obj) {
//     return obj.price
// }).filter(function (price) {
//     return price >= 100
// })

// console.log(countProduct);
// console.log(productAbove100)


//Get the movie Names from this Array of Objects

//method and only get the movie

// name which has rating higher than or equal to 8

// use Filter and map chaining to achaive the objective

// var newReleases = [

//     { "id": 1, "title": "Die Hard", "rating": 9 },

//     { "id": 2, "title": "Bad Boys", "rating": 7 },

//     { "id": 3, "title": "The Chamber", "rating": 10 },

// ];

// let getMoviename = newReleases.map((mov) => {
//     return mov.title
// })

// let getMovieByRating = newReleases.filter((obj) => {
//     if (obj.rating >= 8) {
//         return obj.title;
//     }
// }).map((obj) => {
//     return obj.title;
// })

// console.log(getMoviename)
// console.log(getMovieByRating)



//You have to use map function and have to get all the students name in upperCase

let studentRecords = [
    { name: 'Abhishek', id: 123, marks: 98 },
    { name: 'Udai', id: 101, marks: 90 },
    { name: 'Himanshu', id: 200, marks: 96 },
    { name: 'Mrinal', id: 115, marks: 75 }
]

let StudentNameInUc = studentRecords.map((stu) => {
    return stu.name.toUpperCase();
})

//Retrieve the details of students who scored more than 50 marks and have id greater than 120 from studentRecord


let StudentScoreGreaterThen50 = studentRecords.filter((stud) => {
    return stud.id > 120
}).map((stud) => {
    return stud.name
})


let StudentScoreGreaterThen502 = studentRecords.filter((stud) => {
    return stud.id > 120 && stud.marks > 50
}).map((x) => {
    return x.name
})
console.log(StudentNameInUc)
console.log(StudentScoreGreaterThen50)
console.log(StudentScoreGreaterThen502)