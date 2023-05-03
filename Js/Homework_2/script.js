// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.


let book1 = {
    title: 'Harry Potter',
    pageCount: 500,
    genre: 'fantasy'
};

let book2 = {
    title: 'The Lord of the Rings',
    pageCount: 1000,
    genre: 'fantasy'
};


let book3 = {
    title: 'The Witcher',
    pageCount: 800,
    genre: 'fantasy'

};

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.


let book4 = {
    title: 'Harry Potter',
    pageCount: 500,
    genre: 'fantasy',
    authors: [
        {name: 'J.K. Rowling', age: 55},
        {name: '....', age: 25},
        {name: '....', age: 45}
    ]   
};  


let book5 = {
    title: 'The Lord of the Rings',
    pageCount: 1000,
    genre: 'fantasy',
    authors: [
        {name: 'J.R.R. Tolkien', age: 81},
    ]
};  


let book6 = {
    title: 'The Witcher',
    pageCount: 800,
    genre: 'fantasy',
    authors: [
        {name: 'Andrzej Sapkowski', age: 72},
    ]   
};


//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача










let users = [{
    name: 'Vasya',
    username: 'vasya123',
    password: 'asfasfas'
},
{
    name: 'Petya',
    username: 'petya123',
    password: 'dfgdfg2'
},
{
    name: 'Kolya',
    username: 'kolya123',
    password: 'nbvdrg23'
},
{
    name: 'Olya',
    username: 'olya123',
    password: '4564154'
},
{
    name: 'Ira',
    username: 'ira123',
    password: '12312331313'
},
{
    name: 'Sasha',
    username: 'sasha123',
    password: '123123fdfs'
},
{
    name: 'Masha',
    username: 'masha123',
    password: '123123sdf'
},
{
    name: 'Dasha',
    username: 'dasha123',
    password: '123123fsdfdsf'
},
{
    name: 'Vika',
    username: 'vika123',
    password: '123123sdfdsf4544'
},
{
    name: 'Vova',
    username: 'vova123',
    password: '123123sdfdsf4544!#$#'}
  ];

console.log(users.length); //10


for (let i = 0; i < users.length; i++) {  
    console.log(users[i].password);
    
}

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);




// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 1; //Вірно

if (x !==0){
    console.log('Вірно');
}
else{
    console.log('Невірно');
}

x = 0; //Невірно

if (x !==0){
    console.log('Вірно');
}
else{
    console.log('Невірно');
}

x = -3; //Вірно


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).


let time = 45;
if (time >= 0 && time <= 15) {
    console.log('Перша чверть');
}
else if (time >= 16 && time <= 30) {
    console.log('Друга чверть');
}
else if (time >= 31 && time <= 45 ){
    console.log('Третя чверть');
}
else if (time >= 46 && time <= 59) {
    console.log('Четверта чверть');
}
else {
    console.log('Невірно');
}

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).


let day = 15;
if (day >= 1 && day <= 10) {
    console.log('Перша половина');
}
else if (day >= 11 && day <= 20) {
    console.log('Друга половина');
}
else if (day >= 21 && day <= 31 ){
    console.log('Третя половина');
}
else {
    console.log('error');
}

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


let dayOfWeek = 1;
switch (dayOfWeek) {
    case 1:
        console.log('Понеділок');
        break;
    case 2:
        console.log('Вівторок');
        break;
    case 3:
        console.log('Середа');
        break;
    case 4:
        console.log('Четвер'); 
        break;
    case 5:
        console.log('П\'ятниця');
        break;
    case 6:
        console.log('Субота');
        break;
    case 7:
        console.log('Неділя');
        break;
    default:
        console.log('error');
        break;
}


// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.



let number  = +prompt('Введіть перше число');
let number2 = +prompt('Введіть друге число');
if (number > number2 ){
    console.log(number );
}
else if (number < number2){
    console.log(number2);
}
else if (number === number2){
    console.log( `${number} рівне ${number2}`);
}



// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let variable = 0;
if (!!variable === false){
    variable = 'default';    
}
console.log(variable);




//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    if (coursesAndDurationArray[i].monthDuration > 5) {
        console.log('Супер');
    }
}


if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}

