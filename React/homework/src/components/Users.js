import React from 'react'
import style from './Style.module.css'

const Users = props => {
    const { user } = props

    return (
        <div className={style.userCart}>
            <div className="infoPart">
                <h2>Id: {user.id}</h2>
                <h2>Name: {user.name}</h2>
                <h3>Username: {user.username}</h3>
                <h3>Email: {user.email}</h3>
            </div>
            <div className="buttonPart">
                <button
                    className="brn"
                    onClick={() => {
                        props.setId(user.id)
                    }}
                >
                    Post
                </button>
            </div>
        </div>
    )
}

export default Users
