import {AuthProvider} from "./Auth";
import {useNavigate} from "react-router-dom";

export const Navigation = () => {
    const auth = AuthProvider();
    let navigate = useNavigate();
    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }
    
    return (
        <header aria-label="Site Header" className="shadow-sm">
            <div className="mx-auto max-w-screen-xl p-4">
                <div className="flex items-center justify-between gap-4 lg:gap-10">
                    <nav
                        aria-label="Site Nav"
                        className="hidden gap-8 text-sm font-medium md:flex"
                    >
                        <a className="text-gray-500" href="/">ShowCode</a>
                        {auth.getUser() && (
                        <a className="text-gray-500" href="/list">List</a>
                        )}
                        {auth.getUser() && (
                        <a className="text-gray-500" href="/create">Create</a>
                        )}
                    </nav>

                    {!auth.getUser() && (
                        <div className="hidden flex-1 items-center justify-end gap-4 sm:flex">
                            <a
                                className="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-500"
                                href="/login"
                            >
                                Log in
                            </a>
                        </div>)}
                    {auth.getUser() && (
                        <div className="hidden flex-1 items-center justify-end gap-4 sm:flex">
                            <button
                                className="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-500"
                                onClick={handleLogout}
                            >
                                Log out
                            </button>
                        </div>)}
                </div>
            </div>
        </header>
    )
}