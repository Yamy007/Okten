// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function square(a, b) {
    return a * b;
}

console.log(square(5, 6));
// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circle(r) {
    return Math.PI * r * r;
}

console.log(circle(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinder(r, h) {
    return 2 * Math.PI * r * (r + h);
}

console.log(cylinder(5, 6));

// - створити функцію яка приймає масив та виводить кожен його елемент

function array(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

array([1, 2, 3, 4, 5]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraph(text) {
    document.write(`<p>${text}</p>`);
}

paragraph('Hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function list(text) {
    
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

list('Hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function list2(text, num) {

    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function list3(arr) {
        document.write(`<ul>`);
        for (let i = 0; i < arr.length; i++) {
            document.write(`<li>${arr[i]}</li>`);
        }
        document.write(`</ul>`);
    }


list3([1, 2, 3, 4, 5]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.



function list4(arr) {

    for (let i = 0; i < arr.length; i++) {
        document.write(`<div>`);
        document.write(`<h2>${arr[i].id}</h2>`);
        document.write(`<h2>${arr[i].name}</h2>`);
        document.write(`<h2>${arr[i].age}</h2>`);
        document.write(`</div>`);
    }
}

list4([{id: 1, name: 'Vasya', age: 31}, {id: 2, name: 'Petya', age: 30}, {id: 3, name: 'Kolya', age: 29}]);


// - створити функцію яка повертає найменьше число з масиву

function min(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i];
    }
    return min;

}

console.log(min([1, 2, 3, 4, 5]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];

    }
    return sum;
}

console.log(sum([1, 2, 3, 4, 5]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах

function swap(arr, index1, index2) {
    let a = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = a;
    return arr;
}

console.log(swap([1, 2, 3, 4, 5], 0, 4));
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)


function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let sum = 0;
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            sum = sumUAH / currencyValues[i].value;
        }
    }
    return sum;
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));

// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250