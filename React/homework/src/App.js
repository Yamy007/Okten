import { createContext } from 'react'
import './App.css'
import Child_1 from './components/Child/Child1'
import Child_2 from './components/Child/Child2'
export const AppData = createContext(null)

const App = () => {
    return (
        <AppData.Provider value={'firstValue'}>
            <Child_1 />
            <Child_2 />
        </AppData.Provider>
    )
}

export default App

// context
// Зробити структуру компонентів -
//                               App
//           Child1                              Child2
// SubChild1_1    SubChild1_2          SubChild2_1    SubChild2_2

// Тепер завдання:
// З SubChild2_2 передати данні (будь-які) в SubChild1_1

// ***
// Я б для себе рекомендував зробити наступну штуку з завданням з subchild:
// Зробити його спочатку без використання контексту, а потім переробити з ним. Так краще дійде суть
