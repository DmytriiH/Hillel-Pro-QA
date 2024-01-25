// ДЗ2 Сума вартості послуг
//  Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість:
// var services = {
// 	"стрижка": "60 грн",
// 	"гоління": "80 грн",
// 	"Миття голови": "100 грн"
// };
// "Послуги" можуть додаватися по ходу роботи:
// services['Розбити скло'] = "200 грн";
// Умови виконання ДЗ
// створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
// створити метод minPrice() - який повертає мінімальний price
// створити метод maxPrice() - який повертає максимальний price

// var services = {
//     "Стрижка": "60 грн",
//     "Гоління": "80 грн",
//     "Миття голови": "100 грн"
// };
// services.calculatePrices = function () {
//     let total = 0;
//     let min = Infinity;
//     let max = -Infinity;
//     for (let service in this) {
//         if (this.hasOwnProperty(service) && typeof this[service] === 'string' && this[service].includes('грн')) {
//             const price = parseFloat(this[service]);

//             total += price;
//             min = Math.min(min, price);
//             max = Math.max(max, price);
//         }
//     }
//     return {
//         total: total,
//         min: min,
//         max: max
//     };
// };
// // Виводимо результати
// const prices = services.calculatePrices();
// console.log("Загальна вартість послуг: " + prices.total + " грн");
// console.log("Мінімальна вартість послуг: " + prices.min + " грн");
// console.log("Максимальна вартість послуг: " + prices.max + " грн");




// //Додаем послугу 
// services['Розбити скло'] = "200 грн";

// // Виводимо результати
// const prices = services.calculatePrices();
// console.log("Загальна вартість послуг: " + prices.total + " грн");
// console.log("Мінімальна вартість послуг: " + prices.min + " грн");
// console.log("Максимальна вартість послуг: " + prices.max + " грн");
// //Додаем послуги
// services['Тонування лобоввого скла '] = "600 грн";
