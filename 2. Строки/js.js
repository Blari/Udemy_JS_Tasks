let str = 'some test string';
//Получить первую и последнюю буквы строки
console.log('some test string')
console.log('Получить первую и последнюю буквы строки');
console.log( str[0], ' ', str[str.length - 1]);

//Сделать первую и последнюю буквы в верхнем регистре

console.log( str[0].toUpperCase(), ' ', str[str.length - 1].toUpperCase() );

//Найти положение слова ‘string’ в строке

console.log('Найти положение слова ‘string’ в строке');
console.log( str.indexOf('string'));

//Найти положение второго пробела (“вручную” ничего не считать)
console.log('Найти положение второго пробела (“вручную” ничего не считать)');
console.log( str.lastIndexOf(' ') );

//Получить строку с 5-го символа длиной 4 буквы
console.log('Получить строку с 5-го символа длиной 4 буквы');
console.log( str.substr(5, 4) );

//Получить строку с 5-го по 9-й символы
console.log('Получить строку с 5-го по 9-й символы');
console.log( str.substring(5, 9) );

//Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)
console.log('Получить новую строку из исходной путем удаления последних 6-и символов');
let str2 = str.slice( 0, str.length - 6);
console.log( str2 );

//Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
let a = 20;
let b = 16;
str = '';
str = '' + a + b;
console.log('Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”')
console.log(str);

