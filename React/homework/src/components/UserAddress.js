const UserAddress = ({address}) =>{
    return (<>
        <h2>Street: {address.street}</h2>
        <h2>Suite: {address.suite}</h2>
        <h2>City: {address.city}</h2>
    </>)
}

export default UserAddress;

// UserAddress - яка відображає інформацію street suite city,
