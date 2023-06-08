// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

document.formObject.onsubmit = function (event) {
    event.preventDefault()
    let name = document.formObject.name.value
    let surname = document.formObject.surname.value
    let age = document.formObject.age.value
    let user = {
        name: name,
        surname: surname,
        age: age,
    }
    let div = document.createElement('div')
    div.innerText = JSON.stringify(user)
    document.body.appendChild(div)
}

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let div = document.getElementById('counterReload')
let counter = localStorage.getItem('counter')
if (counter) {
    counter++
} else {
    counter = 1
}
div.innerText = counter
localStorage.setItem('counter', counter)

// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let arr = []
for (let i = 1; i < 101; i++) {
    arr.push({ id: i, name: `name${i}` })
}
let ul = document.getElementById('ul')
let next = document.getElementById('next')
let prev = document.getElementById('prev')

let current = 10

const currentPage = current => {
    ul.innerHTML = ''
    for (let i = current - 10; i < current; i++) {
        ul.innerHTML += `<li> id: ${arr[i].id} name: ${arr[i].name} </li>`
    }
}
next.onclick = () => {
    if (current + 10 <= arr.length) {
        currentPage(current + 10)
        current += 10
    }
}

prev.onclick = () => {
    if (current - 10 >= 10) {
        currentPage(current - 10)
        current -= 10
    }
}
currentPage(current)
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

const btn = document.getElementById('btn')
btn.onclick = () => {
    const text = document.getElementById('text')
    text.style.display = 'none'
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

const formInput = (document.input.onsubmit = function () {
    let age = document.input.age.value
    if (age < 18) {
        alert('Вам менше 18 років')
    } else {
        alert('Вам більше 18 років')
    }
})

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

const formTable = document.form
formTable.onsubmit = function (event) {
    event.preventDefault()
    let rows = document.form.row.value
    let cols = document.form.place.value
    let content = document.form.content.value
    let table = document.createElement('table')
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr')
        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td')
            td.innerText = content
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    document.body.appendChild(table)
}

// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

const money = document.getElementById('money')
let arrTime = localStorage.getItem('moneys') || []
arrTime = JSON.parse(arrTime)
if (arrTime) {
    let date = new Date().getTime()
    let price = arrTime[arrTime.length - 1].price
    if (date - arrTime[arrTime.length - 1].date > 10000) {
        price += 10
        arrTime.push({ date: date, price: price })
    }
} else {
    arrTime = [{ date: new Date().getTime(), price: 100 }]
}
money.innerText = arrTime[arrTime.length - 1].price
arrTime = JSON.stringify(arrTime)
localStorage.setItem('moneys', arrTime)
