// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }

class User {
    constructor(
        id,
        name,
        username,
        email,
        street,
        suite,
        city,
        zipcode,
        lat,
        lng,
        phone,
        website,
        companyName,
        companyCatchPhrase,
        companyBs
    ) {
        this.id = id
        this.name = name
        this.username = username
        this.email = email
        this.address = {
            street,
            suite,
            city,
            zipcode,
            geo: {
                lat,
                lng,
            },
        }
        this.phone = phone
        this.website = website
        this.company = {
            name: companyName,
            catchPhrase: companyCatchPhrase,
            bs: companyBs,
        }
    }

    showUser() {
        console.log(this)
    }
}

let user_1 = new User(
    1,
    'Leanne Graham',
    'Bret',
    'Livandovka',
    'Kulas Light',
    'Apt. 556',
    'Gwenborough',
    '92998-3874',
    '-37.3159',
    '81.1496',
    '1-770-736-8031 x56442',
    'hildegard.org',
    'Romaguera-Crona',
    'Multi-layered client-server neural-net',
    'harness real-time e-markets'
)

user_1.showUser()

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//  -назва тегу ()
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

class Tag {
    constructor(titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag
        this.action = action
        this.attrs = attrs
    }
}

//  Таким чином описати теги
//  -a

let a = new Tag('a', 'Тег <a> створює посилання', [
    {
        name: 'accesskey',
        decription: 'Активація посилання за допомогою комбінації клавіш',
    },
    { name: 'coords', decription: 'Встановлює координати активної області' },
])

console.log(a)

//  -div
let div = new Tag('div', 'Тег <div> представляє собою блок для групування елементів', [
    {
        name: 'align',
        decription: 'Задає вирівнювання вмісту тега <div>',
    },
    { name: 'title', decription: 'Додає властивість спливаючої підказки до елементу' },
])

console.log(div)
//  -h1

let h1 = new Tag('h1', 'Тег <h1> представляє собою найбільш важливий заголовок першого рівня', [
    {
        name: 'align',
        decription: 'Вирівнює заголовок по лівому краю',
    },
    { name: 'title', decription: 'Додає властивість спливаючої підказки до елементу' },
])

console.log(h1)
//  -span

let span = new Tag('span', 'Тег <span> призначений для визначення малих елементів документа', [
    { name: 'accesskey', decription: 'Дозволяє активувати силання за допомогою комбінації клавіш' },
    { name: 'class', decription: "Задає ім'я класу, до якого буде належати елемент" },
])

console.log(span)

//  -input

let input = new Tag(
    'input',
    'Тег <input> є одним з різнобічних елементів форми і дозволяє створити різні елементи інтерфейсу і обміну даними з сервером',
    [
        { name: 'accept', decription: 'Вказує типи файлів, які може обробляти сервер' },
        {
            name: 'accesskey',
            decription: 'Дозволяє активувати силання за допомогою комбінації клавіш',
        },
    ]
)

console.log(input)

//  -form

let form = new Tag('form', 'Тег <form> встановлює форму на веб-сторінці', [
    {
        name: 'accept-charset',
        decription: 'Встановлює кодування, в якому сервер може приймати інформацію',
    },
    { name: 'action', decription: 'Адреса програми або документа, який обробляє дані форми' },
])

//  -option

let option = new Tag(
    'option',
    'Тег <option> визначає окремі пункти списку, що створюється за допомогою контейнера <select>',
    [
        {
            name: 'disabled',
            decription: 'Заблокувати для доступу елемент списку',
        },
        { name: 'label', decription: 'Вказівка ​​мітки пункту списку' },
    ]
)

//  -select

let select = new Tag(
    'select',
    'Тег <select> дозволяє створити елемент інтерфейсу у вигляді списку',
    [
        {
            name: 'accesskey',
            decription: 'Дозволяє активувати силання за допомогою комбінації клавіш',
        },
        {
            name: 'autofocus',
            decription: 'Встановлює, що список отримує фокус після загрузки сторінки',
        },
    ]
)


//  Приклад результуючого об'єкту
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
