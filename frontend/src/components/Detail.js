import {useAuth} from "./Auth";
import {useNavigate} from "react-router-dom";

export function Detail() {

    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }

    return (
        <div>
            Detail page, welcome {auth.user}
            <br/>
            <br/>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}