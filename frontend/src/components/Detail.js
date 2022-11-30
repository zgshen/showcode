import {AuthProvider} from "./Auth";
import {NavLink, useNavigate} from "react-router-dom";

export function Detail() {

    const auth = AuthProvider()//useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }

    return (
        <div>
            Detail page, welcome {auth.getUser()}
            <br/>
            <br/>
            <button onClick={handleLogout}>Logout</button>

            <br/>
            <br/>
            <NavLink to={'/'}>index</NavLink>
        </div>
    )
}