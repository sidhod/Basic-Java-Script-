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
