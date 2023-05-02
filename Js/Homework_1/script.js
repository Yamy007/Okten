// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль




let hello = "hello"

let owu = "owu"

let com = "com"

let ua = "ua"

let num1 = 1

let num2 = 10

let num3 = -999

let num4 = 123

let num5 = 3.14

let num6 = 2.7

let num7 = 16

let bool1 = true

let bool2 = false

console.log(hello)
console.log(owu)
console.log(com)
console.log(ua)
console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)
console.log(num5)
console.log(num6)
console.log(num7)
console.log(bool1)
console.log(bool2)

let firstName = "Yaroslav"
let middleName = "Sadovskyi"
let lastName = "Oleksandrovych"
let person = firstName + " " + middleName + " " + lastName

console.log(person)

let a = 100;
let b = '100'; 
let c = true;
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)

let name = prompt("What is your name?")
let surname = prompt("What is your surname?")
let age = Number(prompt("How old are you?")) 
let person1 = name + " " + surname + " " + age

console.log(person1)