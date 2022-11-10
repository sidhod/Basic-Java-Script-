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
