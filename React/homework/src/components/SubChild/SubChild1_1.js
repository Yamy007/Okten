import React, { useContext } from 'react'
import { AppData } from '../../App'

const SubChild11 = () => {
    let value = useContext(AppData)
    console.log(value)
    return (
        <div>
            <h2>{value}</h2>
        </div>
    )
}

export default SubChild11
