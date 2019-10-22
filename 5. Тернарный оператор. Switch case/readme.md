1. Записать в виде switch case следующее условие:
   if (a === ‘block’) {
   console.log(‘block’)
   } else if (a === ‘none’) {
   console.log(‘none’)
   } else if (a === ‘inline’) {
   console.log(‘inline’)
   } else {
   console.log(‘other’)
   }
2. Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.
   Из задач по условному оператору if else выполнить задачи 1 и 2 в виде тернарного оператора.

// Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let h = "hidden";
if (h == "hidden") {
    h = "visible";
} else h = "hidden";
console.log(h);

// Используя if, записать условие:
// если переменная равна нулю, присвоить ей 1;
// если меньше нуля - строку “less then zero”;
// если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let x = 0;
x = x == 0 ? 1 : x < 0 ? "Less then zero" : (x *= 10);

console.log(x);