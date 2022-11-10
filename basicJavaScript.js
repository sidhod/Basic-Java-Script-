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
