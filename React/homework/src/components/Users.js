import Company  from "./Company";
import UserAddress from "./UserAddress"
import UserDetails from "./UserDetails"
import style from  "./users.module.css"


const User =({users})=>{
    const {address} = users
    const {company} = users

    return (
        <div className={style.wrapper}>
            <UserDetails users={users}/>
            <UserAddress address={address}/>
            <Company company={company}/>
        </div>
    )
}


export default User;