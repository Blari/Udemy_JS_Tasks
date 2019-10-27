const mainArr = ["my", "name", "is", "Trinity"];

function firstFunc(arr, handler1) {
    let arr2 = [];

    for (let i = 0; i < arr.length; i++) {
        arr2.push(handler1(arr[i]));
    }

    arr2.split("");
    console.log(`New walue: ${arr2}`);
}
function concanStr(el) {
    let str = "";
    str += el;
    return str;
}

firstFunc(mainArr, concanStr);
