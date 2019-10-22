//На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
// будут в верхнем регистре. Использовать for или while.

const str = "i am in the easycode";
let str2 = str[0].toUpperCase();
console.log(str2);
for (let i = 1; i <= str.length - 1; i++) {
    if (str[i - 1] == " ") {
        str2 += str[i].toUpperCase();
    } else str2 += str[i];
    console.log(str[i]);
}

console.log(str2);

// Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

let str3 = "tseb eht ma i";

let str4 = "";
for (let j = str3.length - 1; j >= 0; j--) {
    str4 += str3[j];
}
console.log(str4);

//Факториал числа - произведение всех натуральных чисел от 1 до n
// включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.
let sum = 1;
for (let n = 1; n <= 10; n++) {
    sum *= n;
}
console.log(sum);

// На основе строки “JavaScript is a pretty good language” сделать новую строку,
// где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

let str5 = "JavaScript is a pretty good language";
let str6 = str5[0].toUpperCase();
let str7 = "";
for (let k = 1; k <= str5.length - 1; k++) {
    if (str5[k - 1] == " ") {
        str6 += str5[k].toUpperCase();
    } else {
        str6 += str5[k];
    }
}
for (let k = 0; k <= str6.length - 1; k++) {
    if (str6[k] == " ") {
    } else str7 += str6[k];
}
console.log(str7);

//Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let value of arr) {
    if (value % 2 === 0) {
        console.log(value);
    }
}

// Дан объект:
//    let list = {
//    name: ‘denis’,
//    work: ‘easycode’,
//    age: 29
//    }

// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.
let list = {
    name: "denis",
    work: "easycode",
    age: 29
};

for (let val in list) {
    if (typeof list[val] === "string") {
        list[val] = list[val].toUpperCase();
    }
}
console.log(list);
