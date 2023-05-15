// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

square = (a, b) =>( a * b) 


console.log(square(7, 6));




// - створити функцію яка обчислює та повертає площу кола з радіусом r

circle = (r) => (Math.PI * r * r)

console.log(circle(5));



// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

cylinder = (r, h) => (2 * Math.PI * r * (r + h))

console.log(cylinder(5, 6));

// - створити функцію яка приймає масив та виводить кожен його елемент



array = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

array([1, 2, 3, 4, 5]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

paragraph = (text) => {
    document.write(`<p>${text}</p>`);
}

paragraph('Hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

list = (text) => {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

list('Hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

list2 = (text, number) => {
    document.write(`<ul>`);
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

list2('Hello', 5);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

list3 = (arr) => {
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write(`</ul>`);
}

list3([1, 2, 3, 4, 5]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.



list4 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        document.write(`<div>`);
        document.write(`<h2>${arr[i].id}</h2>`);
        document.write(`<h2>${arr[i].name}</h2>`);
        document.write(`<h2>${arr[i].age}</h2>`);
        document.write(`</div>`);
    }
}

list4([{
        id: 1,
        name: 'Vasya',
        age: 25
    },
    {
        id: 2,
        name: 'Petya',
        age: 30

    },
    {
        id: 3,
        name: 'Kolya',
        age: 35
    }
]);


// - створити функцію яка повертає найменьше число з масиву

min = (arr)=> {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i];
    }
    return min;
}


console.log(min([1, 2, 3, 4, 5]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13


sum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(sum([1, 2, 3, 4, 5]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах



swap = (arr, index1, index2) => {
    let a = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = a;
    return arr;
}

console.log(swap([1, 2, 3, 4, 5], 0, 1));
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)



exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            return sumUAH / currencyValues[i].value;q
        }
    }
}

console.log(exchange(10000, [{
        currency: 'USD',
        value: 40
    },
    {
        currency: 'EUR',
        value: 42
    }
], 'USD'));

// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


// - рекурсія

fact = (num)=> {
    if (num === 1) return 1;
    return num * fact(num - 1);
}

console.log(fact(5));


