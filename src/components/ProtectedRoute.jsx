import { useContext } from "react"
import { Link, Navigate, Outlet } from "react-router-dom"
import { Context } from "../app/AppContext"

const ProtectedRoute = () => {
    const {login, setLogin, setToken} = useContext(Context)
    if (!login) {
        return <Navigate to={'/'} replace />
    }
    const logout = () => {
        localStorage.setItem('token', '')
        setLogin(false)
        setToken('')
    }
    return (
        <>
            <nav>
                <Link onClick={logout} to={'/'}>log out</Link>
            </nav>
            <Outlet/>
        </>
        
    )
}


export default ProtectedRoute
