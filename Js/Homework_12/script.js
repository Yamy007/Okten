// зробити файл users.html => ok
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів





// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)


fetch('http://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (const i of value){
            let div = document.createElement("div")
             div.className = 'cart'
             div.innerHTML = `<h1>user id: ${i.id} name: ${i.name}</h1><a href = "user-details.html?id=${i.id}">${i.name}</a>`
             document.body.appendChild(div)
        }})






// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

