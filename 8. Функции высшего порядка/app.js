const mainArr = ["my", "name", "is", "Trinity"];
const mainArr2 = [10, 20, 30];

function firstFunc(arr, handler1) {
    let arr2 = [];

    for (let i = 0; i < arr.length; i++) {
        arr2.push(handler1(arr[i]));
    }
    console.log(`New value: ${arr2.join("")}`);
}
function concanStr(el) {
    let el2 = "";
    for (let i = 0; i < el.length; i++) {
        el2 += i === 0 ? el[i].toUpperCase() : el[i];
    }

    return el2;
}

firstFunc(mainArr, concanStr);

function secondFunc(arr, handler) {
    let arr2 = [];

    for (let i = 0; i < arr.length; i++) {
        arr2.push(handler(arr[i]));
    }
    console.log(`New value: ${arr2.join(", ")}`);
}

function multiply(el) {
    return el * 10;
}

secondFunc(mainArr2, multiply);
