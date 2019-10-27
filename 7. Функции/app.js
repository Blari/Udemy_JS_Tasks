// Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)

function multiply() {
    sum = 1;
    if (arguments.length > 0) {
        for (let i = 0; i < arguments.length; i++) {
            sum *= arguments[i];
        }
        console.log(sum);
    } else console.log(0);
}

multiply();

// Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.
function reversString(str) {
    let arr = str.split("");
    console.log(arr.reverse().join(""));
}

reversString("Hello world!");

// Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:

// getCodeStringFromText(‘hello’) // “104 101 108 108 111”

function getCodeStringFromText(str) {
    let arr = str.split("");
    let arr2 = [];
    for (let i = 0; arr.length > i; i++) {
        arr2.push(str.charCodeAt(i));
    }
    console.log(arr2.join(" "));
}

getCodeStringFromText("hello world!");

// Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.

function randomNumber(x) {
    let y = Math.floor(Math.random() * 10 + 1);
    if (!isNaN(x) && x > 0 && x < 11) {
        if (x === y) {
            console.log("Вы выиграли");
        } else {
            console.log(`Вы не угадали ваше число ${x} а выпало число ${y}`);
        }
    }
}

randomNumber(1);
