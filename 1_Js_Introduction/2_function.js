// normal function
//-----------------

// function sayHi(){
//     console.log('function said hi');
// }
// // function declaretion

// sayHi()  // function invoked

// // parameter in function

// function add(x,y){  // x , y parameter of function
//     return x+y
// }

// function sub(x,y){  // x , y parameter of function
//     return x-y
// }

// function mult(x,y){  // x , y parameter of function
//     return x*y
// }

// function div(x,y){  // x , y parameter of function
//     return x/y
// }

// function mod(x,y){  // x , y parameter of function
//     return x%y
// }
// console.log('addition is' ,add(5,8)) // 5,8 are arguments
// console.log('subtraction is' ,sub(5,8)) // 5,8 are arguments
// console.log('multiplication is' ,mult(5,8)) // 5,8 are arguments
// console.log('division is' ,div(5,8)) // 5,8 are arguments
// console.log('module is' ,mod(5,8)) // 5,8 are arguments


// function as first class citizen
//--------------------------------

// js function aur variable main koi defrence nahi rakhta
// let sayHi = function(){ //anonymous function
//     console.log('hi')
// }

// sayHi()

// IIFE (Immediate invoked function Expresion)
// function jisse bnate hi call ker le usse IIFE
// exaple - it used in automation
// let pow = (function(a,b){
//     return a**b
// })(2,1000)

// console.log(pow);