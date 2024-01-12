//HomeWork1

// var res = 'number' + 3 + 3 // + не завжди просто додавання, 'number' строка, канкатенація зі строкою тому number33
// console.log(res);

// var a = null + 3 // операція додавання, null буде = 0 + 3 = 3
// console.log(a); // 3 

// var res = 5 && "qwerty"; // Логічний оператор &&
// console.log(res)  // qwerty 

// var res = +'40' + +'2' + "hillel"; // Унарний плюс (+) перетворює  '40' в число 40 та +'2' в 2, далі додавання 40+2=42 та + "hillel" канкатенація зі строкою
// console.log(res)  // 42hillel

// var res = '10' - 5 === 6; // '10' - 5 = 5 операція віднімання, а далі оператор строгої рівності ===, 5 не дорівнює 6, тому буду false
// console.log(res)  // false

// console.log(true + false) // 1
// або 
// var res = true + false; // '+' Js завждт намагається привести все до числа, далі операція додавання 1+0=1
// console.log(res); // 1 

// var res = '4px' - 3; // '4px' - не перетворюэться в число тому це NaN, а будь які операції з Nan повертають NaN
// console.log(res); // NaN

// var result = '4' - 3; // Js завждт намагається привести все до числа '4' = 4, 4- 3 = 1 операція віднімання
// console.log(result); // 1 

// console.log('6' + 3 ** 0); // 61 -правоасоціативна операція зведення в ступінь 3 ** 0 - 1, далі  канкатенація зі строкою '6' + 1 буде 61

// var result = 12 / '6'; //  операція поділу, '6' до числа 6 
// console.log(result); // 2 

// var result = '10' + (5 === 6); // оператор строгої рівності ===, 5 не дорівнює 6, тому буду false, далі канкатенація зі строкою
// console.log(result); // 10false

// var result = null == ''; // 
// console.log(result); // false

// var res = null == ''; // оператор рівності ==, тип object не дорівнює типу string, туму false
// console.log(res)  // false
// console.log(typeof null); // object
// console.log(typeof "''"); // string
// console.log(Boolean(null)==true); // false офіційна помилка самої мови програмування
// console.log(Boolean('')==true); // false

// var result = 3 ** (9 / 3); // операція поділу (9 / 3), далі зведення в ступінь 3 ** 3 = 27 
// console.log(result); // 27

// console.log(!!'false'); // true 
// console.log(!!'true'); // true
// console.log(!!'false' == !!'true'); // true  - !! перетворення до boolean типу,
// == порівнює два значення на рівність (за значенням) і повертає true або false

// var result = 0 || '0' && 1; // && булевий оператор повертається останнє обчислене значення 1, далі || "або" - як тільки знайшли хоч один true тому 0 || 1 буде 1
// console.log(result); // 1 

// console.log((+null == false) < 1) //  false 
// console.log(+null) // 0 унарний '+' - завжди призводить до числа +null = 0 
// console.log(false) // false прирівнюється до 0
// console.log(+null == false) // true Оператор рівності 0 == 0 
// console.log(true < 1) // false , true прирівнюється до 1, а 1 < 1 - невірно 


// console.log(false && true || true) // true
// console.log(false && true) // false Логічний оператор && повертає false
// console.log(false || true) // true Логічний оператор перевірки || "або" - повертає true як тільки знайшли хоч один true

// console.log(false && (false || true)) // false
// console.log(false || true) // true  Логічний оператор перевірки || "або" - повертає true як тільки знайшли хоч один true
// console.log(false && true) // false Логічний оператор && повертає false

// var res = (+null == false) < 1 ** 5;
// console.log(res); // false 
// console.log(+null == false) //де унарний '+' - завжди призводить до числа +null = 0, false прирівнюється до 0 що дає true 
// var res = 1 ** 5;
// console.log(res); //далі зведення в ступінь 1 в 5 = 1 
// var res = true < 1;
// console.log(res); // false, true прирівнюється до 1, а 1 < 1 - невірно 