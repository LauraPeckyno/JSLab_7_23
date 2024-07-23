let x = 1
let car = "volvo"
let carColor = "silver"
let name = "Laura"
let city = "Pittsburgh"
let state = "PA"
let moves = 12
let myStreet ="Stanton"
let houseType ="apartment"
let pets = "cats"

let cityState = (city + ", " + state)
let myCar = (carColor + " " + car);
console.log (cityState);
console.log ("My name is " +name +".");
let y= (x + 1);

if (moves >= x) {
 console.log ("I move a lot.");
} else {
    alert("you need to move.");
}

console.log (y);
if (car = "volvo") {
    console.log ("I own a " +car);
} else {
    console.log ("I don't own a car.");
}

if (pets = "cats") {
    console.log ("I have a cat");
} else {
    console.log ("you need a cat.");
}

console.log ("Hi. " + "My name is " +name + ". I live with my " + pets + " in an " + houseType +" on " +myStreet + "in " + cityState + ". I own a " + myCar + " and I've moved " + moves + " times.");