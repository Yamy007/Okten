import React from 'react'
import style from './Space.module.css'
const Space = props => {
    const { space } = props
    return (
        <div className={style.wrapper}>
            <h2>{space.mission_name}</h2>
            <h3>
                <span className={style.bold}>{space.launch_year}</span>
            </h3>
            <h3>{space.links.mission_patch_small}</h3>
        </div>
    )
}

export default Space
