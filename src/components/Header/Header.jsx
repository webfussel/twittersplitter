import './Header.scss'
import User from "./User/User";
import {useUserStore} from "../../store/UserStore";

const Header = () => {
    const user = useUserStore(state => state.user);
    console.log(user)

    return (
        <header className="Header">
            <h1>TwitterSplitter</h1>
            <User user={user}/>
        </header>
    )
}

export default Header