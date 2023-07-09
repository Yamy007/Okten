import React, { useEffect, useState } from 'react'
import './App.css'
import Post from './components/Post'

function App() {
    const [post, setPost] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(value => value.json())
            .then(value => setPost(value))
    }, [])
    return (
        <div className="main">
            {post.map(value => (
                <Post post={value} key={value.id} />
            ))}
        </div>
    )
}

export default App

// з jsonplaceholder отримати всі пости в компоненту Posts.js
// відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
// Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)
