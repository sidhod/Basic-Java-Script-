//Welcome Message
console.log("Welcome In java script");
//Function
function add(a, b, c) {
    let add;
    add = a + b + c;
    console.log("normal function Addition of three no:", add);
}
add(10, 10, 20);

//anoynomus function
//(c,d)=>{
//     console.log("values",c,d);
// }

//Arrow Functions
let addi = (a, b, c) => {
    console.log("arrow function addition", a + b + c);
}
addi(10, 20, 30);

//hoisting: 
p = 5;
q = 10;
let additionH = p + q;
console.log("addition", additionH)
var p;
var q;


// var let, let and const
//var--
var x = 5;
function show() {

    console.log("in Function", x);
    {

        console.log("inside the block:", x);
    }
}
show();

console.log("Outside", x);

//let

function show() {
    let y = 5;
    console.log("in Function", y);
    {

        console.log("inside the block:", y);
    }
}
show();

//const---
const xy = 5;
function show() {
    const xy = 5;
    console.log("in Function", xy);
    {
        console.log("inside the block:", xy);
    }
}
show();
console.log("outside:", xy);