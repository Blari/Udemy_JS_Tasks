// //Создать объект с полем product, равным ‘iphone’
// Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
// Добавить поле details, которое будет содержать объект с полями model и color

let obj = {
  product: "iphone"
};
console.log(obj);
obj.price = 1000;
obj.currenct = "dollar";
console.log(obj);
obj.details = {
  model: "xl",
  color: "gold"
};
console.log(obj);
