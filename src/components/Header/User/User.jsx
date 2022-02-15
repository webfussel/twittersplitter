import './User.scss'
import Avatar from "../../Avatar/Avatar";
import Login from "../Login/Login";

const User = ({user}) => {
    return !!user ? <Avatar user={user} /> : <Login/>
}

export default User