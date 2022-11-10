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