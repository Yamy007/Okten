const UserDetails = ({users}) =>{
    return (<>
        <h1>Name: {users.name}</h1>
        <h1>Id: {users.id}</h1>
        <h1>Username: {users.username}</h1>
        <h1>Email: {users.email}</h1>
        <h1>Phone: {users.phone}</h1>
        <h1>Website: {users.website}</h1>
    </>)
}

export default UserDetails;

// UserDetails - яка відображає інформацію id,name,username,email,phone,website,
