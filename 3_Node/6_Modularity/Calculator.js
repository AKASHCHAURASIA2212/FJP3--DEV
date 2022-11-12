function add(a,b){
    console.log(a+b);
}

function sub(a,b){
    console.log(a-b);
}

function mult(a,b){
    console.log(a*b);
}

function div(a,b){
    console.log(a/b);
}

function mod(a,b){
    console.log(a%b);
}

function pow(a,b){
    console.log(a**b);
}


module.exports={
    addition : add ,
    subtract : sub ,
    multiply : mult ,
    divide   : div ,
    moduler  : mod ,
    power    : pow ,
}

// module.exports is a Object provided by Node.js by
// which you can export your functions in key value pair
// you will use your functions with the keys you have assigned
// to them