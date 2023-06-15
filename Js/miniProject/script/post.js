// На странице post-details.html:
//  7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
//  8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
let url = new URL(window.location.href).searchParams.get('id')
fetch(`https://jsonplaceholder.typicode.com/posts/${url}`)
    .then(value => value.json())
    .then(value => {
        let main = document.getElementById('main')
        let container2 = document.createElement('div')
        container2.className = 'container2'
        let div = document.createElement('div')
        div.innerHTML = `<div class="infoBox">
        <h2>Title: ${value.title}</h2>
        <h2>ID: ${value.id}</h2>
        <h2>User ID ${value.userId}</h2>
        <p>Body: ${value.body}</p>
        </div>
        <div class = 'comments' id = 'comment'></div>`
        container2.appendChild(div)
        main.appendChild(container2)
        fetch(`https://jsonplaceholder.typicode.com/posts/${value.id}/comments`)
            .then(value => value.json())
            .then(value => {
                let comment = document.getElementById('comment')
                for (const i of value) {
                    let div = document.createElement('div')
                    div.className = 'commentCart box'
                    div.innerHTML = `
                    <h2>ID: ${i.id}</h2>
                    <h2>Post ID: ${i.postId}</h2>
                    <h2>Name: ${i.name}</h2>
              <h2>Email: ${i.email}</h2>
              <h2>Body: ${i.body}</h2>`
                    comment.appendChild(div)
                }
            })
    })
