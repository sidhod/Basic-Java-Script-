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