function createCircle(radius) {
    return {
        radius, // modern JS allows this if variable name 
                // is same as the param => radius = radius

        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(12);
console.log(circle2);