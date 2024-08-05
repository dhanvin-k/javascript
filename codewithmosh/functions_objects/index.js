/* 
    Every object has a constructor property that refrences 
    the contructor used to create that object
    let x = new Object() -> using object literal syntax 
    uses built-in JS constructor;
    few more built-in contructors: 
        new String();
        new Boolean();
        new Number(); 
*/
let x = {};


/*
    All functions are objects in JS
*/
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const another = Circle(1);
console.log(Circle.name);
console.log(Circle.length);
console.log(Circle.constructor);    /* uses built-in function constructor 
                                       when using constructor syntax */

/*
    you can use the call method to pass an object with params, so that this
    refrences that object instead of creating a new empty object
*/
Circle.call({}, 1); // this is the same as: const another = Circle(1);