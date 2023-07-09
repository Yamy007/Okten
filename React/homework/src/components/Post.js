import { useState } from 'react'
import style from './Post.module.css'
const Post = props => {
    const { post } = props
    const [active, setActive] = useState(false)
    return (
        <div className={style.wrapper}>
            <div className={style.infoBlock}>
                <h2>ID: {post.id}</h2>
                {active && <h2>UserId: {post.userId}</h2>}
                <h2>Title: {post.title}</h2>
                {active && <h3>Body: {post.body}</h3>}
            </div>
            <div className={style.btnBlock}>
                <button
                    className={style.btn}
                    onClick={() => (active ? setActive(false) : setActive(true))}
                >
                    More Info
                </button>
            </div>
        </div>
    )
}

export default Post
