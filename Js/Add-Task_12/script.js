// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
fetch("https://jsonplaceholder.typicode.com/users")
.then(value => value.json())
.then(value => {
    
    for (const i of value){
        let container = document.createElement('div')
        container.className = "box"
        let div = document.createElement('div')
        div.innerHTML =  `<h1>${i.username}</h1> <h2>${i.email}</h2> <h4>contact phone: ${i.phone}</h4>`
        div.className = "cart"
        let button = document.createElement('button')
        button.className = "btn"
        button.onclick =()=>{
            postShow(i.id)
        }
        button.innerText = "Post"
        div.appendChild(button)
        let div_2 = document.createElement('div')
        div_2.className = "userInfo"
        div_2.style.display = "none"
        div_2.id = `userId-${i.id}` 
        container.appendChild(div)
        container.appendChild(div_2)

        document.body.appendChild(container)


    }
})


// кожному елементу юзера створити кнопку, при кліку на яку в окремий блок виводяться всі пости поточного юзера.
const postShow = (id) =>{
    let search = document.getElementById(`userId-${id}`)
    if (search.style.display === "none"){
        search.style.display = "block"
  
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(value => value.json())
        .then(value => {
            let container = document.createElement("div")
            container.className = "container"
            for (const i of value){
                let miniContainer = document.createElement("div")
                miniContainer.className = "miniContainer"
                let div = document.createElement("div")
                let div_2 = document.createElement("div")
                div_2.className = "comments"
                div_2.style.display = "none"
                div_2.id = `post-${i.id}`
                let button = document.createElement('button')
                button.onclick =() =>{
                    comments(i.id)
                }
                button.innerText = "comments"
                button.className = "btn"
                div.className = "infoUser"
                div.innerHTML = `<h2>${i.title}</h2> <p>${i.body}</p> <h4>${i.userId}</h4> `
                div.appendChild(button)
                miniContainer.appendChild(div)
                miniContainer.appendChild(div_2)
             
                container.appendChild(miniContainer)
            }
            search .appendChild(container)
        })
    }
    else{
        search.style.display = "none"
    }
}

let comments = (id)=>{
    let search = document.getElementById(`post-${id}`)
    if (search.style.display === 'none'){
        search.style.display = 'block'
    
    
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(value => value.json())
    .then(value=>
        {
            for (const i of value){
                let div = document.createElement('div');
                div.className = "cart";
                div.innerHTML = `<h2>${i.name}</h2> <h3>${i.email}</h3> <p>${i.body}</p> <h4>${i.postId}</h4> `
                search.appendChild(div)            
            }
        })
    }
    else{
        search.style.display = 'none'
    }

}


// Кожному елементу post створити кнопку, при кліку на яку в окремий блок виводяться всі коментарі поточного поста










// 1.
// От римати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста




