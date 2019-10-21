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

// Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.
let car = { name: "Lexus", age: 6, create: 2008, needRepair: false };
console.log(car);
if (car.age > 5) {
    console.log("Need Repair");
    car.needRepair = true;
} else car.needRepair = false;

console.log(car);

// Дан объект let item = { name: 'Intel core i7', price: '100\$', discount: '15%' }.
// Написать условие если у item есть поле discount и там есть значение то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.
let item = { name: "Intel core i7", price: "150$", discount: "8%" };

if (item.discount && item.discount != "") {
    item.priceWithDiscount =
        parseInt(item.price) -
        (parseInt(item.price) * parseInt(item.discount)) / 100;
} else {
    console.log(item.price);
}

console.log(item);

//    Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

let product = {
    name: `Яблоко`,
    price: "10$"
};

let min = 15; // минимальная цена
let max = 20; // максимальная цена

let filtr =
    parseInt(product.price) >= min && parseInt(product.price) <= max
        ? product.name
        : "Товаров не найдено";

console.log(filtr);
