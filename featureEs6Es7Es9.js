//Es6 Feature
//1.Default function parameters
function add(a, b = 2) {
    return a + b;
}
console.log(add(3));

//2.template literals
let firtName = "Sidhodhan";
let lastName = "kamble";
console.log(`My name is ${firtName} ${lastName}`);

//3.Multi Line String
let multiLineString = `Hi Guys My Name Is Sidhodhan Kamble
I am 22 Year old.
I am From Pune`;
console.log(multiLineString);

//4.Spread Operator
let num1 = [1, 2, 3, 4, 5];
let num2 = [6, 7, 8, 9, 10];
let num3 = [...num1, ...num2];
console.log(num3);

//For object
let obj1 = {
    Name: "Sid",
    Age: 22,
}
let obj2 = {
    Name: "Sid",
    Age: 23,
}
let obj3 = { ...obj1, ...obj2 };
console.log(obj3);

//5.Destructuring assignment
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let [x, y, z, ...rest] = numbers;
console.log(x, y, z, ...rest);

//6. Arrow function
const add1 = (a, b) => {
    return "1ition", a + b;
}
console.log(add1(5, 10));

//8. let, const to replace var
// console.log(a); // undefined
// var a = 10;
// console.log(a); // Cannot access 'a' before initialization
// let a = 10;

//9.promise 
function firstname(firstName) {
    return firstName
}
function error() {
    return "Name is null";
}
let demo = () => {
    return new Promise((resolve, reject) => {
        const prompt = require('prompt-sync')();
        let firstName = prompt("Enter Your Fist Name: ");
        if (firstName == "") {
            reject(error());
        }
        else {
            resolve(firstname(firstName));

        }

    });
}
demo()
    .then((value) => console.log("Hi guys, My name is" + value))
    .catch((error) => console.log("Invalid", error));



//ES7
// //Include() method
let str = "Hi Guys!"
console.log(str.includes("Hi"));


//Index Operator(exponetial operator in math)
console.log(3 ** 5);//normal
console.log(Math.pow(3, 5));//using math.pow()

//print all keys and values
let obj = {
    firstName: "Sidhodhan",
    lastName: "Kamble",
    Age: 22,

}
console.log("keys: " + Object.keys(obj1));
console.log("Values: " + Object.values(obj1));
console.log(`value-${obj.firstName}`);

var ES9
//1.await in loop:ES9 adds asynchronous iterators, allowing await to be 
// used with for-loops to perform asynchronous operations step by step.
const fruitsToGet = ['apple', 'grape', 'pear']
function getNumFruit(fruit) {
    console.log(fruit);

}
async function forEachLoop() {
    console.log('Start')
    fruitsToGet.forEach(async fruit => {
        await getNumFruit(fruit)

    })

    console.log('End')
}
forEachLoop();
// 2. promise.finally()
const demo1 = () => {
    return new Promise((resolve, reject) => {
        let flag = true;
        if (flag == true) {
            resolve("validate")
        } else {
            reject("Invalidate");
        }
    });
}
demo1()
    .then((value) => console.log("after resolve-->", value))
    .catch((error) => console.log("after reject-->", error))
    .finally(() => { console.log("Must show") });

//3.Rest, Spread: the Rest indefinite length parameters… can be converted into an array and passed in.
function restParams(a, b, ...c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
restParams(1, 2, 3, 4, 5);

//4.RegExp:itcan return matching packets
const regExpDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regExpDate.exec('2020-06-25');
const year = match[1]; // 2020
const month = match[2]; // 06
const day = match[3]; // 25
console.log(match[0]);
