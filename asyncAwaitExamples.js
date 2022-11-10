//Async Await Example No 1
function add(a, b) {
    return a + b;
}
function resolveAfter3seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(add(5, 5));
        }, 1000);
    });
}
async function asyncCall() {
    let add = 5;
    console.log("calling");
    const result = await resolveAfterseconds();
    console.log("after resolve result ", result);
    const FinalResult = result + add;
    console.log("after resolve ", FinalResult);

}
asyncCall();

// Example of Async Await
//add fuction
function search(firstName) {
    const cars = ["Sid", "Sai", "Sidhodhan"];
    for (let i = 0; i <= 3; i++) {
        if (cars[i] == firstName) {
            console.log(firstName + " Is Found In Record");
            break;
        }
    }
}
// timeout for 3 sec
function searchNameInArray(firstName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(search(firstName));
        }, 1000);
    });
}

//async fuction
async function asyncCall1() {
    const prompt = require('prompt-sync')();
    let firstName = prompt("Enter Your Fist Name: ");
    console.log("Searching....");
    await searchNameInArray(firstName);

}
//Call Function
asyncCall1();


// Example of Async Await No 3
//add fuction
function checkLogin(userName, password) {
    if (userName == "Sid" && password == "pass@123") {
        console.log("Welcome Sid");
        console.log("Login Successful");
    }
    else {
        console.log("Invalid Login!!")
    }

}
// timeout for 3 sec
function login(userName, password) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(checkLogin(userName, password));
        }, 3000);
    });
}

//async fuction
async function asyncCall2() {
    const prompt = require('prompt-sync')();
    let userName = prompt("Enter Your User Name: ");
    let password = prompt("Enter Your Password: ");
    console.log("Wait....");
    await login(userName, password);
    console.log("End");

}
//Call Function
asyncCall2();

// Example of Async Await No 4
//otp validation
function genrateOtp() {
    let otpgenrate = Math.floor(Math.random() * 7000) + 1000;
    return otpgenrate;

}
// timeout for 3 sec
function sendOtp() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(genrateOtp());
        }, 3000);
    });
}

function otpvalidation(otp, otpgenrate) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (otp == otpgenrate) {
                resolve(genrateOtp());
            } else {
                console.log("Validation Fails..")
            }

        }, 3000);
    });
}

//async fuction
async function asyncCall3() {
    console.log("Wait....Otp is genrated");
    let otpgenrate = await sendOtp();
    console.log("--Otp Send To Your Mobile--");
    const prompt = require('prompt-sync')();
    let otp = prompt("Enter Otp You Got On Mobile: ");
    console.log("Wait For Otp Validation");
    await otpvalidation(otp, otpgenrate);
}
//Call Function
asyncCall3();

// Example of Async Await No 5
const employeeData = [];
function insert(name, message, age) {

    employeeData.push(name);
    employeeData.push(message);
    employeeData.push(age);
}

function insertInArray(name, mobileNumber, age) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve((insert(name, mobileNumber, age)));
        }, 3000);
    });
}

//async fuction
async function asyncCall4() {
    console.log("Welcome");
    const prompt = require('prompt-sync')();
    let name = prompt("Enter employee name: ");
    let mobileNumber = prompt("Enter employee Mobile Number: ");
    let age = prompt("Enter employee Age: ");
    console.log("--Data is Added To database--");
    console.log("wait...")
    await insertInArray(name, mobileNumber, age);
    console.log("--Data Inserted--");
    console.log(employeeData);

}
//Call Function
asyncCall4();