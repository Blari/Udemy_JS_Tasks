// Записать в виде switch case следующее условие:
//    if (a === ‘block’) {
//    console.log(‘block’)
//    } else if (a === ‘none’) {
//    console.log(‘none’)
//    } else if (a === ‘inline’) {
//    console.log(‘inline’)
//    } else {
//    console.log(‘other’)
//    }
let a = "coube";
switch (a) {
    case "block": {
        console.log("block");
        break;
    }
    case "none": {
        console.log("none");
        break;
    }
    case "inline": {
        console.log("inline");
        break;
    }
    default:
        console.log("other");
}

//Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let visible = "visible";

visible = visible === "hidden" ? "visible" : "hiden";

console.log(visible);

let x = 0;
x = x == 0 ? 1 : x < 0 ? "Less then zero" : (x *= 10);

console.log(x);
