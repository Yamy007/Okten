import React, { useContext } from 'react'
import { AppData } from '../../App'

const SubChild22 = () => {
    let theme = useContext(AppData)
    theme = 'change value'
    console.log(theme)
    return (
        <div>
            <h2>{theme}</h2>
        </div>
    )
}

export default SubChild22
