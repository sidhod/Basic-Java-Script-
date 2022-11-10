// Example of Promise No 1
const demo = () => {
    return new Promise((resolve, reject) => {
        let flag = true;
        if (flag == true) {
            resolve("validate")
        } else {
            reject("Invalidate");
        }
    });
}
demo()
    .then((value) => console.log("after resolve-->", value))
    .catch((error) => console.log("after reject-->", error));


// Example of Promise No 2
function add(a, b) {
    return a + b;
}
function error() {
    return "You Got Error";
}
let demo1 = () => {
    return new Promise((resolve, reject) => {
        let flag = false;
        if (flag == true) {
            resolve(add(5, 10));
        } else {
            reject(error());
        }
    });
}
demo1()
    .then((value) => console.log("after resolve-->", value))
    .catch((error) => console.log("after reject-->", error));

// Example of Promise No 3
function firstname(firstName) {
    return firstName
}
function error() {
    return "Name is null";
}
let demo2 = () => {
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
demo2()
    .then((value) => console.log("Hi guys, My name is" + value))
    .catch((error) => console.log("Invalid", error));


// Example of Promise No 4
function display(firstName, lastName) {
    console.log("My Name is " + firstName + " " + lastName)

}
function error1() {
    return "First Name is empty";
}
function error2() {
    return "Last Name is empty";
}
let demo3 = () => {
    return new Promise((resolve, reject) => {
        const prompt = require('prompt-sync')();
        let firstName = prompt("Enter Your Fist Name: ");
        let lastName = prompt("Enter Your Last Name: ");
        if (firstName == "") {
            reject(error1());
        }
        else if (lastName == "") {
            reject(error2());
        } else {
            resolve(display(firstName, lastName));

        }

    });
}
demo3()
    .then()
    .catch((error) => console.log("Invalid", error));
