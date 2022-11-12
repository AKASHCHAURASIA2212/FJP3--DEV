// in JS object is basacally key value Pair

let cap = {
    firstName:'Steave',
    lastName:'Rogers',
    friends:['Bucky','tony','natasha','banner','thor'],
    age:108,
    sayHi: function(){
         console.log('Cap Say Hi')
    },
    address:{
        state:'america',
        city:'Queens'
    }
}

console.log(cap)
console.log(cap.friends[3])

for(let key in cap){
    console.log("key : " ,key , "\nvalue : " ,cap[key]);
}
// add new Property in object
cap.movies = ['age of ultron' ,'new world order']
// to delete a Property
delete cap.age;
console.log(cap);