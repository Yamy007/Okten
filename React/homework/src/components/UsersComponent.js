import { useEffect, useState } from "react";
import User from "./User"
const UsersComponent = ({setPost})=>{
    const [user, setUser] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(value => value.json())
            .then(value => setUser(value))
    },[])

    return(<div>

        {user.map(user => <User user={user} setPost={setPost} key ={user.id}/>)}
    </div>);
}


export default UsersComponent;


// state lifting
// Є компонента Арр. В середині неї є UsersComponent, який отримує данні з https://jsonplaceholder.typicode.com/users
// Кожен юзер - окрема компонента UserComponent,в якій є кнопка show posts, при натисканні на яку робиться state lifting, а саме - в компоненті App відображаються пости того юзера, на кнопку якого клікнули.
