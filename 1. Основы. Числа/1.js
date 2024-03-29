// Получить число pi из Math и округлить его до 2-х знаков после точки
let p = Math.PI;
console.log('1. Получить число pi из Math и округлить его до 2-х знаков после точки')
console.log( p.toFixed(2) );

// Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
let arr = [15, 11, 16, 12, 51, 12, 13, 51];
console.log('2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51');
console.log( Math.max.apply(Math, arr) );
console.log( Math.min.apply(Math, arr) );

//Работа с Math.random:
//a. Получить случайное число и округлить его до двух цифр после запятой
//b. Получить случайное целое число от 0 до X. X - любое произвольное число. 

let r = Math.random().toFixed(2);
let r2 = Math.random() * 1000 + 1;
console.log('3.1. Получить случайное число и округлить его до двух цифр после запятой');
console.log(r);
console.log('3.2 Получить случайное целое число от 0 до X. X - любое произвольное число.');
console.log(r2.toFixed());

// Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
let x = 0.6;
let y = 0.7;
let z = x + y;
console.log('Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?');
console.log( z.toFixed(1) );

//Получить число из строки ‘100$’

let sto = '100$';
console.log('Получить число из строки ‘100$’');
console.log( parseInt(sto) );

