import {createContext, useContext, useState} from "react";

const AuthContext = createContext(null);

/**
 * 权限认证
 */
export function AuthProvider({children}) {

    const [user, setUser] = useState(null);

    // http request，调用后端登录
    const login = (user) => {
        setUser(user)
    }

    // 登出
    const logout = () => {
        setUser(null)
    }

    return (
        // 上下文用户、登录函数和登出函数
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}