import { useEffect } from "react";

const User = ({user, setPost}) => {
    const showPost = (id) =>{
        
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(value => value.json())
            .then(value => setPost(value))
     
        console.log("1")
    }
    return(<>
        <div>
            <h1>Id: {user.id}</h1>
            <h2>Name: {user.name}</h2>
            <h2>Email: {user.email}</h2>
            <button onClick={()=> showPost(user.id)}>Show post</button>
        </div>
    </>);
}

export default User;