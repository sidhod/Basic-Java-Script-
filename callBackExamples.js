// Example 1 Call Back function
function myDisplayer(some) {
    console.log("result", some);
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

// Callback Function Example No 2
function firstname(firstName, lastName, myFunction) {
    console.log("First Name:", firstName);
    // callback function
    lastname(lastName);
}

// callback function
function lastname(lastName) {
    console.log("Last Name: ", lastName);
}

// calling the function after 2 seconds
setTimeout(firstname, 2000, "Sidhodhan", "Kamble", lastname);

// Callback Function Example No 3
function checkUserName(userName, password, checkPassword) {
    if (userName == "Sidhodhan") {
        console.log("Correct User name");
        // callback function
        checkPassword(password);
    } else {
        console.log("Invalid User name")
    }

}

// callback function
function checkPassword(password) {
    if (password == "Pass@123") {
        console.log("Correct Password");
        console.log("Login successful");
    }
}

// calling the function after 2 seconds
//Pass username password and callbackfunction
setTimeout(checkUserName, 2000, "Sidhodhan", "Pass@123", checkPassword);

// Callback Function Example No 4
const add = function (a, b, callback) {
    console.log("First Show add message: ")
    //callback Fuction
    callback(a, b)
}

function sum(a, b) {
    console.log("addition:", a + b);
}
add(1, 2, sum);


// Callback Function Example No 5
function printMobileNumber(mobileNumber, otp, checkOtp) {
    console.log("Mobile Number: " + mobileNumber);
    // callback function
    checkOtp(otp);
}

// callback function
function checkOtp(otp) {
    const prompt = require('prompt-sync')();
    let inputOtp = prompt("Enter Otp You Recived: ");
    if (inputOtp == otp) {
        console.log("Sucessful Validation!!!");
    } else {
        console.log("Unsucessful Validation!!!");
        console.log("Otp genrated: " + otp);
        console.log("Otp You enter: " + inputOtp);
    }
}
let mobileNumber = "9309951100";
let otp = Math.floor(Math.random() * 7000) + 1000;
// calling the function after 2 seconds
//Otp Validation pass parameter mobileNumber And random otp
setTimeout(printMobileNumber, 5000, mobileNumber, otp, checkOtp);