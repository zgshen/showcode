import {useAuth} from "./Auth";
import {Navigate, useLocation} from "react-router-dom";

/**
 * 需要登录才能访问的页面的校验函数
 */
export const RequireAuth = ({children}) => {
    const auth = useAuth()
    const location = useLocation()
    
    if (!auth.user) {
        return <Navigate to='/login' state={{path: location.pathname}} />
    }
    
    return children
}