import React, { useEffect, useState } from 'react'
import './App.css'
import Post from './components/Post.js'
import User from './components/Users.js'

const App = () => {
    const [users, setUser] = useState([])
    const [id, setId] = useState()
    const [post, setPost] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(value => value.json())
            .then(value => setPost(value))
    }, [id])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(value => value.json())
            .then(value => setUser(value))
    }, [])
    return (
        <div className="main">
            {users.map(value => (
                <>
                    <User user={value} key={value.id} setId={setId} id={id} />
                </>
            ))}
            {post.map(value => (
                <Post post={value} key={value.id} />
            ))}
        </div>
    )
}

export default App

// вивести всіх юзерів з плайсхолдеру
// в кожного юзера має бути кнопка яка буде показувати пости цього юзера

// пости мають виводитись під компонетою Users (в App компоненті)
