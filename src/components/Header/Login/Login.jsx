import './Login.scss'
import {signIn} from "../../../services/Authentication";
import {useUserStore} from "../../../store/UserStore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const Login = () => {
    const setAll = useUserStore(state => state.setAll);

    const login = async () => {
        const res = await signIn()
        if (res.success) {
            setAll(res)
        } else {
            console.log(res.error)
        }
    }

    return (
        <button className="Login" onClick={login}><FontAwesomeIcon icon={faTwitter} />Login with Twitter</button>
    )
}

export default Login