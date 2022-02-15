import './Avatar.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSignOutAlt} from '@fortawesome/pro-light-svg-icons'
import {useState} from "react";
import {signIn} from "../../services/Authentication";
import {useUserStore} from "../../store/UserStore";

const Avatar = ({user}) => {
    const [isOpen, setIsOpen] = useState(false)
    const clearStore = useUserStore(state => state.clear)

    const {photoURL: img, displayName: name} = user

    const bigAvatar = img.replace('normal', '400x400')

    const toggleOpen = () => setIsOpen(!isOpen)

    const logout = async () => {
        const res = await signIn()
        if (res.success) {
            clearStore()
        } else {
            console.log(res.error)
        }
        toggleOpen()
    }

    return (
        <div className="Avatar">
            <div onClick={toggleOpen}>
                <span>{name}</span>
                <img src={bigAvatar} alt={name}/>
            </div>
            <ul className={isOpen && 'open'}>
                <li onClick={logout}>
                    <FontAwesomeIcon icon={faSignOutAlt}/>
                    <span>Sign Out</span>
                </li>
            </ul>
        </div>
    )
}

export default Avatar