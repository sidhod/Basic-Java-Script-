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