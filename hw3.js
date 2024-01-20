// Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати певну кількість
//  випадкових чисел в діапазоні від 100 до 1000 включно.

//  Порахувати кількість парних та непарних серед них.
//  Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? Приклад функції checkProbabilityTheory(count). 
//  Параметр count буде вказувати скільки разів буде генеруватися випадкове число.

// Умови виконання ДЗ

// Функція виводить інформацію

// Кількість згенерованих чисел: кількість чисел
// Парних чисел: кількість парних чисел
// Не парних чисел: кількість не парних чисел
// Відсоток парних до не парних: 


// function checkProbabilityTheory(count) {
//     let totalNumbers = 0;
//     let even = 0;
//     let odd = 0;
//     while (totalNumbers < count) {
//         const randomNumber = Math.floor(Math.random() * (1001 - 100) + 100);
//         totalNumbers++;
//         if (randomNumber % 2 === 0) {
//             even++;
//         } else {
//             odd++;
//         }
//     }
//     const evenPercentage = (even / totalNumbers) * 100;
//     const oddPercentage = (odd / totalNumbers) * 100;
//     console.log("Кількість згенерованих чисел: " + totalNumbers);
//     console.log("Парних чисел: " + even);
//     console.log("Не парних чисел: " + odd);
//     console.log("Відсоток парних до не парних: " + evenPercentage.toFixed(2) + "% : " + oddPercentage.toFixed(2) + "%");
// }
// checkProbabilityTheory(1000);