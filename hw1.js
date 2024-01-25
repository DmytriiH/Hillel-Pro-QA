
// Створіть об'єкт з щонайменше трьома властивостями (намагайтесь виявити фантазію). 
// Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення". 
// Зверніть увагу: метод повинен працювати навіть після додавання нових властивостей до об'єкта. 

// Наприклад так:

// obj.getInfo(); // Правильна інформація про об'єкт
// obj.newProperty = 'Нова властивість!'; // Додали властивість до об'єкта
// obj.getInfo(); // Виводить всі властивості, включаючи щойно додану.
// Умови виконання ДЗ

// Не використовувати функції або інші матеріали які ми не вивчали
// Не використовувати методи keys, values, entries
// Намагайтесь робити ДЗ самостійно та не дивитися будь-які підказки

// var myObject = {
//     course: "Кращі курси",
//     type: " - це Hillel",
//     durations: {
//         hours: 46,
//         numberOfLessons: 23,
//     },
//     durationsInfo: function () { 
//         console.log('Main hours: ' + this.durations.hours + ', numberOfLessons: ' + this.durations.numberOfLessons);
//     },
//     data: {
//         student: "Дмитро",
//         specialty: 'QA Pro'
//     },
//     dataInfo: function () { 
//         console.log('Main student: ' + this.data.student + ', specialty: ' + this.data.specialty);
//      },
//     getInfo: function () {
//     // Отримуємо всі властивості об'єкта та їх значення
//     for (var all in myObject) {
//         if (this.hasOwnProperty(all)) {
//             console.log(all + ": " + myObject[all]);
//         }
//     }
// }
// };

// // Виводимо інформацію про об'єкт
// myObject.dataInfo();
// myObject.durationsInfo();
// console.log("Ім'я об'єкта: " + myObject.course + myObject.type);
// console.log("Інформація про об'єкт durations: ", (myObject.durations.hours) + " годин" + " це " + (myObject.durations.numberOfLessons) + " лекцій");
// console.log("Інформація про об'єкт data:","Студент", myObject.data.student,", курс", myObject.data.specialty);
// console.log("Об'єкт durations:", myObject.durations);
// console.log("Об'єкт data:", myObject.data);
// console.log("Student об'єкта data: " + myObject.data.student);
// myObject.getInfo();

// // Додавання нової властивості
// myObject.newProperty = 'Нова властивість!';
// myObject.getInfo();
