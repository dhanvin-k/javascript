const colors = ['red','green','blue'];
const circle = {
    radius: 1,
    draw() {
        console.log("draw");
    }
};

// for-each loop
colors.forEach(element => {
    console.log(element);
});


// for-in loop => loop through properties of objs 
//                or arrays

for(let color in colors)
    console.log(color, colors[color]);

for (let key in circle)
    console.log(key, circle[key]);


// for-of loop => you can loop array with this or 
// other iterables
for (let color of colors) {
    console.log(color);
}