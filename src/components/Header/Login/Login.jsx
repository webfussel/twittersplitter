import {signIn} from "../../../services/Authentication";
import {useUserStore} from "../../../store/UserStore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import Button from "../../Button/Button";

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
        <Button click={login}>
            <FontAwesomeIcon icon={faTwitter} />
            <span>Login with Twitter</span>
        </Button>
    )
}

export default Login