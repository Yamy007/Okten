// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr = [1, 2, 3, 4, 5 , 'a', 'b', 'c', 'd', 'e', true, false, 1, 2, 3, 4, 5 , 'a', 'b', 'c', 'd', 'e', true, false];

let mas_number = [1, 2, 3, 4, 5];
let mas_string = ['a', 'b', 'c', 'd', 'e'];
let mas_mix = [1, 2, 3, 4, 5 , 'a', 'b', 'c', 'd', 'e', true, false];

console.log(arr);
console.log(mas_number);
console.log(mas_string);
console.log(mas_mix);



// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)


let mas_1 = [2,17,13,6,22,31,45,66,100,-18] ;

// 1. перебрати його циклом while

let i = 0;
while (i < mas_1.length) {
    console.log(mas_1[i]);
    i++;
}

// 2. перебрати його циклом for

for (let i = 0; i < mas_1.length; i++) {
    console.log(mas_1[i]);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

i = 0;
while (i < mas_1.length) {
    if (i % 2 !== 0) {
        console.log(mas_1[i]);
    }
    i++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 0; i < mas_1.length; i++) {
    if (i % 2 !== 0) {
        console.log(mas_1[i]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

i = 0;
while (i < mas_1.length) {
    if (mas_1[i] % 2 === 0) {
        console.log(mas_1[i]);
    }
    i++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = 0; i < mas_1.length; i++) {
    if (mas_1[i] % 2 === 0) {
        console.log(mas_1[i]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"

for (let i = 0; i < mas_1.length; i++) {
    if (mas_1[i] % 3 === 0) {
        mas_1[i] = 'okten';
    }
}

console.log(mas_1);

// 8. вивести масив в зворотньому порядку.

for (let i = mas_1.length - 1; i >= 0; i--) {
    console.log(mas_1[i]);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 1. перебрати його циклом while   

i = mas_1.length - 1;
while (i >= 0) {
    console.log(mas_1[i]);
    i--;
}

// 2. перебрати його циклом for

for (let i = mas_1.length - 1; i >= 0; i--) {
    console.log(mas_1[i]);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

i = mas_1.length - 1;
while (i >= 0) {
    if (i % 2 !== 0) {
        console.log(mas_1[i]);
    }
    i--;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом 

for (let i = mas_1.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
        console.log(mas_1[i]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

i = mas_1.length - 1;
while (i >= 0) {
    if (mas_1[i] % 2 === 0) {
        console.log(mas_1[i]);
    }
    i--;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = mas_1.length - 1; i >= 0; i--) {
    if (mas_1[i] % 2 === 0) {
        console.log(mas_1[i]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"

for (let i = mas_1.length - 1; i >= 0; i--) {
    if (mas_1[i] % 3 === 0) {
        mas_1[i] = 'okten';
    }
}

console.log(mas_1);

// 8. вивести масив в зворотньому порядку.

for (let i = 0; i < mas_1.length; i++) {
    console.log(mas_1[i]);
}


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи


let mas_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (let i = 0; i < mas_2.length; i++) {
    console.log(mas_2[i]);
}

let mas_3 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

for (let i = 0; i < mas_3.length; i++) {
    console.log(mas_3[i]);
}

let mas_4 = [true, false, true, false, true, false, true, false, true, false];

for (let i = 0; i < mas_4.length; i++) {
    console.log(mas_4[i]);
}

let mas_5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', true, false, true, false, true, false, true, false, true, false];

for (let i = 0; i < mas_5.length; i++) {
    if (typeof mas_5[i] === 'boolean') {
        console.log(mas_5[i]);
    }
}

for (let i = 0; i < mas_5.length; i++) {
    if (typeof mas_5[i] === 'number') {
        console.log(mas_5[i]);
    }
}

for (let i = 0; i < mas_5.length; i++) {
    if (typeof mas_5[i] === 'string') {
        console.log(mas_5[i]);
    }
}



// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write



let mas_6 = [];

mas_6[0] = 1;
mas_6[1] = 'a';
mas_6[2] = true;
mas_6[3] = 2;
mas_6[4] = 'b';
mas_6[5] = false;
mas_6[6] = 3;

for (let i = 0; i < mas_6.length; i++) {
    console.log(mas_6[i]);
}

for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(i);
}

for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(i);
}

for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(i);
}

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(i);
    }
}

for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        document.write(i);
    }
}



// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор


let books = [
    {title: 'book_1', pages: 100, authors: ['author_1', 'author_2'], genres: ['genre_1', 'genre_2']},
    {title: 'book_2', pages: 200, authors: ['author_3', 'author_4'], genres: ['genre_3', 'genre_4']},
    {title: 'book_3', pages: 300, authors: ['author_5', 'author_6'], genres: ['genre_5', 'genre_6']},
    {title: 'book_4', pages: 400, authors: ['author_7', 'author_8'], genres: ['genre_7', 'genre_8']},
    {title: 'book_5', pages: 500, authors: ['author_9', 'author_10'], genres: ['genre_9', 'genre_10']},
    {title: 'book_6', pages: 600, authors: ['author_11', 'author_12'], genres: ['genre_11', 'genre_12']},
    {title: 'book_7', pages: 700, authors: ['author_13', 'author_14'], genres: ['genre_13', 'genre_14']},
    {title: 'book_8', pages: 800, authors: ['author_15', 'author_16'], genres: ['genre_15', 'genre_16']},
    {title: 'book_9', pages: 900, authors: ['author_17', 'author_18'], genres: ['genre_17', 'genre_18']},
    {title: 'book_10', pages: 1000, authors: ['author_19', 'author_20'], genres: ['genre_19', 'genre_20']},
];

let maxPages = books[0].pages;
let maxGenres = books[0].genres.length;
let maxTitle = books[0].title.length;
let maxAuthors = books[0].authors.length;
let oneAuthor = 0;

for (let i = 0; i < books.length; i++) {
    if (books[i].pages > maxPages) {
        maxPages = books[i].pages;
    }
}

for (let i = 0; i < books.length; i++) {
    if (books[i].genres.length > maxGenres) {
        maxGenres = books[i].genres.length;
    }
}

for (let i = 0; i < books.length; i++) {
    if (books[i].title.length > maxTitle) {
        maxTitle = books[i].title.length;
    }
}

for (let i = 0; i < books.length; i++) {
    if (books[i].authors.length > maxAuthors) {
        maxAuthors = books[i].authors.length;
    }
}

for (let i = 0; i < books.length; i++) {
    if (books[i].authors.length === 1) {
        oneAuthor++;
    }
}

console.log(maxPages);
console.log(maxGenres);
console.log(maxTitle);
console.log(maxAuthors);
console.log(oneAuthor);
