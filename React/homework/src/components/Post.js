import React from 'react'
import style from './Style.module.css'

const Post = props => {
    const { post } = props

    return (
        <div className={style.wrapper}>
            <h2>{post.id} </h2>
            <h2>{post.userId} </h2>
            <h2>{post.title} </h2>
            <h2>{post.body} </h2>
        </div>
    )
}

export default Post
