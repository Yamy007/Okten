// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        let main = document.getElementById('main')
        let container = document.createElement('div')
        container.className = 'container'
        for (const i of value) {
            let div = document.createElement('div')
            div.className = 'box'
            div.innerHTML = `<div class = 'title'>
        <h2>Name: ${i.name}</h2>
        <a class='btn' href = 'user-details.html?id=${i.id}'>More info</a>
        </div>
        <div class = "down">
        <h3>ID:${i.id}</h3>
        </div>`
        container.appendChild(div)        
        }
        main.appendChild(container)
    })
    


//
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
// user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
// блоки з короткою іфною про post - в ряд по 5 .
// post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
// Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)
