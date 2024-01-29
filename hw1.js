// ДЗ1 Тасувати масив 
// Ми знаємо як відсортувати масив. А ось спробуйте його перемішати!

// Приклад масиву: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 

// Напишіть функцію myBlend(arr), яка перемішуватиме переданий їй масив. 
// Зверніть увагу: не створювати новий масив, вже перемішаний,
//  а саме перемішувати той, який їй передали.


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('Початковий arr=' + arr);

function myBlend(arr) {
    arr.sort(function() {
        return Math.random() - 0.5;
    });
}
myBlend(arr);
console.log("Після мого перемішування: " + arr);