// - створити блок,
let div = document.createElement('div')
// - додати йому класи wrap, collapse, alpha, beta
div.classList = 'wrap collapse alpha beta'
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.style.background = '#000'
div.style.width = '500px'
div.style.height = '500px'
div.style.color = '#fff'
div.style.fontSize = '1rem'
div.style.margin = '5px'
// - додати цей блок в body.
document.body.appendChild(div)
// - клонувати його повністю, та додати клон в body.
let divNew = div.cloneNode(true)
document.body.appendChild(divNew)
// - Є масив:
//
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let array = ['Main', 'Products', 'About us', 'Contacts']

let ul = document.createElement('ul')

for (const elem of array) {
    let li = document.createElement('li')
    li.innerText = elem
    ul.appendChild(li) // ul.innerHtml += `<li>${elem}</li>`
}
document.body.appendChild(ul)

// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 },
]

for (elem of coursesAndDurationArray) {
    let div = document.createElement('div')
    div.innerHTML = `<h2> ${elem.title} </h2> \n <h4> ${elem.monthDuration} </h4>`
    document.body.appendChild(div)
}

// =========================

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

let search = document.body.getElementsByTagName('div')

for (let i = 2; i < search.length; i++) {
    search[i].classList = 'item'
    let elem = coursesAndDurationArray[i - 2]
    search[
        i
    ].innerHTML = `<h1 class='heading'> ${elem.title}  </h1>  \n  <p class='description'>  ${elem.monthDuration} </p>`
}

// ==========================

// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: "Бартолом'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.",
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png',
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png',
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png',
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png',
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png',
    },
]

// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
for (elem of simpsons) {
    let div = document.createElement('div')
    div.classList = 'member'
    div.innerHTML = `<h2>  ${elem.name} ${elem.surname} </h2> \n <h4> ${elem.age} </h4> \n <p> ${elem.info} </p> \n <img src="${elem.photo}" alt="">`
    document.body.appendChild(div)
}
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

// =========================
// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: [
            'html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
        ],
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: [
            'html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced',
        ],
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: [
            'html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced',
        ],
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC'],
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: [
            'html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java',
        ],
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: [
            'html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'sass',
        ],
    },
]
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами

for (elem of coursesArray) {
    let div = document.createElement('div')
    div.classList = 'course'
    let divTitles = document.createElement('div')
    divTitles.classList = 'titles'
    let divTitle = document.createElement('div')
    divTitle.classList = 'title'
    divTitle.innerText = elem.title
    let divMonthDuration = document.createElement('div')
    divMonthDuration.innerText = elem.monthDuration
    divMonthDuration.classList = 'monthDuration'
    let divHourDuration = document.createElement('div')
    divHourDuration.innerText = elem.hourDuration
    divHourDuration.classList = 'hourDuration'
    let divModules = document.createElement('div')
    divModules.classList = 'modules'
    let divElem2 = document.createElement('ul')
    for (elem2 of elem.modules) {
        let li = document.createElement('li')
        li.innerText = elem2
        divElem2.appendChild(li)
    }
    divModules.appendChild(divElem2)
    div.appendChild(divTitle)
    div.appendChild(divTitles)
    divTitles.appendChild(divMonthDuration)
    divTitles.appendChild(divHourDuration)
    div.appendChild(divModules)
    document.body.appendChild(div)
}

// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
