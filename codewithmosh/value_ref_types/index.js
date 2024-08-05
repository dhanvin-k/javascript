/*
    value(primitives) types:            ref types:
    Number                              Object
    String                              Function
    Boolean                             Array
    Symbol (new in ES6)
    undefined
    null
*/

let x = { value: 10 };
let y = x;

x.value = 20;

/* x and y are independent of each other in value types */
console.log(x);
console.log(y);

/*  
    x and y are dependent of each other in ref types, 
    when we do y = x, y is pointed the address where 
    x obj is stored 
*/
console.log(x);
console.log(y);

/* using value type - independant */
let number = 10;

function increment(number) {
  number++;
}

increment(number);
console.log(number);

/* using value type - dependant */
let numberObj = { value: 10 };

function incrementObjVal(numberObj) {
  numberObj.value++;
}

increment(numberObj);
console.log(numberObj);
