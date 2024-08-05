function createCircle(radius) {
    return {
        radius, /* modern JS allows this if variable name 
                   is same as the param => radius = radius */

        draw() {
            console.log('draw');
        }
    };
}

const myCircle = createCircle(1);
console.log(myCircle);

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(1);
console.log(circle);

/*
    new is used 3 things happen:
        - create a new empty object,
        - assigns to this to point to the new empty obj
        - it will return that empty obj from the function
*/