import React, { useEffect, useState } from 'react'
import './App.css'
import Space from './components/Space.js'

const App = () => {
    const [space, setSpace] = useState([])
    useEffect(() => {
        fetch(`https://api.spacexdata.com/v3/launches/`)
            .then(value => value.json())
            .then(value => setSpace(value))
    }, [])
    return (
        <div className="main">
            {space
                .filter(value => value.launch_year !== '2020')
                .map(value => (
                    <Space space={value} key={value.mission_name} />
                ))}
        </div>
    )
}

export default App
// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
// потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)
