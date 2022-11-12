// Array is colliction of hetrogeneous type of item

let arr = ['apple',12,null,undefined]
console.log(arr)

// add element in arr
arr[4]='car';
console.log(arr)
// pop()--> remove last element
// push()--> add element in last
// shift()--> remove element from start
// unshift()--> add element from start

// 2D Array

let mat = [[1,2],[2,3],[3,4]];
mat.forEach(element => {
    console.log(element[0] , element[1])
});