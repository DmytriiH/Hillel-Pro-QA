// // Уявімо собі, що ми є власниками великої компанії, 
// // яка розробляє платформу для продажу квитків.
// //  Окрім того, наша компанія продає рішення для організації 
// //  продажу цих квитків. Таким чином, у нас будуть клієнти,
// //   які придбають наше програмне забезпечення (ПО). 
// //   По суті, ці клієнти будуть подібні до "дочірніх компаній" 
// //   (subCompany), які вже використовують наше ПО для продажу квитків. 
// //   Крім цього, ці "дочірні компанії" також можуть стати постачальниками
// //    цього рішення, і в цьому випадку вони вже будуть "внучатами компанії"
// //     (subSubCompany), і так далі і далі

// // Вам необхідно написати функцію findValueByKey(companyName),
// //  яка буде приймати значення у вигляді companyName та надавати інформацію
// //   про цю subCompany.

// // Ось приклад об'єкту, зверніть увагу на вкладеність, 
// // та маєте на увазі що об'єкт може ставати ще глибшим. 

// const company = {
//     name: 'Велика Компанія',
//     type:'Головна компанія',
//     platform: 'Платформа для продажу квитків',
//     sellsSolution: 'Рішення для продажу квитків',
//     clients: [
//         {
//             name: 'Клієнт 1',
//             type: 'subCompany',
//             uses: 'ПО для продажу квитків',
//             sells: 'Рішення для продажу квитків',
//             partners: [
//                 {
//                     name: 'Клієнт 1.1',
//                     type: 'subSubCompany',
//                     uses: 'Рішення для продажу квитків',
//                     sells: 'Рішення для продажу квитків',
//                 },
//                 {
//                     name: 'Клієнт 1.2',
//                     type: 'subSubCompany',
//                     uses: 'Рішення для продажу квитків',
//                     sells: 'Рішення для продажу квитків',
//                     partners: [
//                         {
//                             name: 'Клієнт 1.2.3',
//                             type: 'subSubCompany',
//                             uses: 'Рішення для продажу квитків',
//                             sells: 'Рішення для продажу квитків',
//                             partners: [
//                             {
//                                 name: 'Клієнт 1.2.4',
//                                 type: 'subSubSubCompany',
//                                 uses: 'Рішення для продажу квитків',
//                                 sells: 'Рішення для продажу квитків',
//                             }
//                         ]
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             name: 'Клієнт 2',
//             type: 'subCompany',
//             uses: 'ПО для продажу квитків',
//             sells: 'Рішення для продажу квитків',
//             partners: [
//                 {
//                     name: 'Клієнт 2.2',
//                     type: 'subSubCompany',
//                     uses: 'Рішення для продажу квитків',
//                     sells: 'Рішення для продажу квитків',
//                 }
//             ]
//         }
//     ]
// };

function findValueByKey(companyName, obj = company, path = []) {
    for (const key in obj) {
        if (key === 'name' && obj[key] === companyName) {
            console.log('Інформація про компанію:', obj);
            return { company: obj, path: [...path, key] };
        } else if (typeof obj[key] === 'object') {
            const result = findValueByKey(companyName, obj[key], [...path, key]);
            if (result && result.company) {
                return result;
            }
        }
    }
if (path.length === 0) {
console.log(`Компанію з назвою "${companyName}" не знайдено.`);
return null;
 }
}
findValueByKey('Клієнт 1.2.3');
findValueByKey('Клієнт 2.21');