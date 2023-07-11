import { useState } from 'react';
import './App.css';
import UsersComponent from "./components/UsersComponent"

function App() {
  const [post, setPost] = useState([])
  return (
    <>
      <UsersComponent setPost = {setPost}/> 
      {post?.map(value =>(
        <div key ={value.id}>
          <h2>id: {value.id}</h2>
          <h2>userId: {value.userId}</h2>
          <h2>title: {value.title}</h2>
          <h2>body: {value.body}</h2>
        </div>
      ))}
    </>
  );
}

export default App;





// state lifting
// Є компонента Арр. В середині неї є UsersComponent, який отримує данні з https://jsonplaceholder.typicode.com/users
// Кожен юзер - окрема компонента UserComponent,в якій є кнопка show posts, при натисканні на яку робиться state lifting, а саме - в компоненті App відображаються пости того юзера, на кнопку якого клікнули.

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