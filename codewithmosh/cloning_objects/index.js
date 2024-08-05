const circle = {
    radius: 1,
    draw() {
        console.log("draw");
    }
};

// cloning objects 
const circle1 = {};
for(let key in circle)
    circle1[key] = circle[key];
console.log(circle1);

// cloning objects in modern JS
const circle2 = Object.assign({}, circle);
console.log(circle2);

// 
const circle3 = {...circle};
console.log(circle3);