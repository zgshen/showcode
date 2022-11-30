/**
 * 权限认证
 */
export const AuthProvider = () => {
    
    // http request，调用后端登录
    const login = (user) => {
        localStorage.setItem("user", JSON.stringify(user))
    }

    // 登出
    const logout = () => {
        localStorage.setItem("user", null)
    }
    
    const getUser = () => {
        let user = localStorage.getItem("user");
        return JSON.parse(user)
    }

    return (
        {login, logout, getUser}
    )
}
