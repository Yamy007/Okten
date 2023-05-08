// 1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
//        b. заповнити його 50 непарними числами за допомоги циклу.
//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
//  2. Вивести за допомогою console.log кожен третій елемен
//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.



let arr = [];
for (let i = 0; i < 50; i++) {
    arr[i] = i * 2;
}

console.log(arr);

let arr2 = [];
for (let i = 0; i < 50; i++) {
    arr2[i] = i * 2 + 1;
}

console.log(arr2);

let arr3 = [];
for (let i = 0; i < 20; i++) {
    arr3[i] = Math.random();
}

console.log(arr3);

let arr4 = [];
for (let i = 0; i < 20; i++) {
    arr4[i] = Math.floor(Math.random() * (732 - 8) + 8);
}

console.log(arr4);

for (let i = 0; i < arr4.length; i++) {
    if (i % 3 === 0) {
        console.log(arr4[i]);
    }
}

for (let i = 0; i < arr4.length; i++) {
    if (i % 3 === 0 && arr4[i] % 2 === 0) {
        console.log(arr4[i]);
    }
}

let arr5 = [];
for (let i = 0; i < arr4.length; i++) {
    if (i % 3 === 0 && arr4[i] % 2 === 0) {
        arr5.push(arr4[i]);
    }
}

console.log(arr5);

for (let i = 0; i < arr4.length; i++) {
    if (arr4[i + 1] % 2 === 0) {
        console.log(arr4[i]);
    }
}

let arr6 = [100, 250, 50, 168, 120, 345, 188];

let sum = 0;
for (let i = 0; i < arr6.length; i++) {
    sum += arr6[i];
}

console.log(sum / arr6.length);

let arr7 = [];
for (let i = 0; i < 20; i++) {
    arr7[i] = Math.random();
}

console.log(arr7);

let arr8 = [];
for (let i = 0; i < arr7.length; i++) {
    arr8[i] = arr7[i] * 5;
}

console.log(arr8);

let arr9 = [1, 2, 3, 'a', 'b', 'c', 4, 5, 6, 'd', 'e', 'f', 7, 8, 9, 'g', 'h', 'i', 10, 11, 12, 'j', 'k', 'l', 13, 14, 15, 'm', 'n', 'o', 16, 17, 18, 'p', 'q', 'r', 19, 20, 21, 's', 't', 'u', 22, 23, 24, 'v', 'w', 'x', 25, 26, 27, 'y', 'z'];

let arr10 = [];
for (let i = 0; i < arr9.length; i++) {
    if (typeof arr9[i] === 'number') {
        arr10.push(arr9[i]);
    }
}


console.log(arr10);



// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];

// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
        {user_id: 3, country: 'USA', city: 'Portland'},
        {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
        {user_id: 2, country: 'Poland', city: 'Krakow'},
        {user_id: 4, country: 'USA', city: 'Miami'}
    ];
    

let usersWithCities = [];

for (let i = 0; i < usersWithId.length; i++) {
    for (let j = 0; j < citiesWithId.length; j++) {
        if (usersWithId[i].id === citiesWithId[j].user_id) {
            usersWithId[i].address = citiesWithId[j];
            usersWithCities.push(usersWithId[i]);
        }
    }
}


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.


let arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];

for (let i = 0; i < arr11.length; i++) {
    if (arr11[i] % 2 === 0) {
        console.log(arr11[i]);
    }
}


//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.


let arr12 = [];
for (let i = 0; i < arr11.length; i++) {
    arr12[i] = arr11[i];
}


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let mas_letter = [ 'a', 'b', 'c'];

let word = '';
for (let i = 0; i < mas_letter.length; i++) {
    word += mas_letter[i];
}

console.log(word);

word= '';
let i = 0;
while (i < mas_letter.length) {
    word += mas_letter[i];
    i++;
}

console.log(word);

word = '';
for (let letter of mas_letter) {
    word += letter;
}

console.log(word);