//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function number(a,b,c ){

    if  (a <b && a < c){
        console.log(a);
    }else if (b < a && b < c){
        console.log(b);
    }else if (c < a && c < b){
        console.log(c);
    }
    else{
        console.log("error");
    }
}

number(3,2,3);


//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)


function numberMax(a,b,c ){
    
        if  (a > b && a > c){
            console.log(a);
        }else if (b > a && b > c){
            console.log(b);
        }else if (c > a && c > b){
            console.log(c);
        }
        else{
            console.log("error");
        }
    }

numberMax(2,2,4);


//- створити функцію яка повертає найбільше число з масиву


function arrayMax(array){
    let max = array[0];
    for (const item of array) {
        if (item > max){
            max = item;
        }
    }
    return max;
}

console.log(arrayMax([1,2,3,4,5,6,40,8,9,10]));


//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function arrayAverage(array){
    let sum = 0;
    for (const item of array) {
        sum += item;
    }
    return sum/array.length;
}


console.log(arrayAverage([1,2,3,4,5,6,40,8,9,10]));


//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


function arrayMix(...args){
    let min = args[0];
    let max = args[0];
    for (i of args){
        if (i < min){
            min = i
        }
        if (i > max ){
            max = i
        }
    }
    console.log(min)
    return max
}

console.log(arrayMix(4, 5, -25, 0, 9, 12))


//- створити функцію яка заповнює масив рандомними числами

function randomMas(mas=[], length=10){
    for (let i =0; i< length; i++){
        let randomNumber = (Math.random()*100).toFixed() 
        mas.push(randomNumber)
    }
    return mas    
}
     
console.log(randomMas())

//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

function randomMasLimit (limit){
    let count = (Math.random()*100).toFixed()
    if (count < 2) count = 3  
    mas = []
    for (let i=0; i < count; i++){
        let randomNumber = (Math.random()*limit).toFixed() 
        mas.push(randomNumber)
    }

    return mas
}

console.log(randomMasLimit(12))

//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function reverseMas(arr){
    let NewArr = []
    for (let i = arr.length-1; i  >= 0; i-- ){
        NewArr.push(arr[i])
    }
    return NewArr
}

console.log(reverseMas([1, 2, 3, 0, 5, 6, 7, ]))

//- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.


function argument(...args){
    if (args.length === 1){
        console.log(args[0])
    }else if (args.length === 2){
        console.log(args[0] + args[1])
    }
}

argument(1, 2)




// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]


function sumMas(arr1, arr2){
    let newArr = []
    for (let i = 0; i < arr1.length; i++){
        newArr.push(arr1[i] + arr2[i])
    }
    return newArr
}

console.log(sumMas([1,2,3,4], [2,3,4,5]))

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]


function keyMas(arr){
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        newArr.push(Object.keys(arr[i]))
    }
    return newArr
}

console.log(keyMas([{name: 'Dima', age: 13}, {model: 'Camry'}]))

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


function valueMas(arr){
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        newArr.push(Object.values(arr[i]))
    }
    return newArr
}

console.log(valueMas([{name: 'Dima', age: 13}, {model: 'Camry'}]))