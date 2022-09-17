import { useContext, useState } from "react"
import { Link, Navigate, Outlet } from "react-router-dom"
import { Context } from "../app/AppContext"

const ProtectedRoute = () => {
    const [count, setCount] = useState(0)
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
            <div>
                <button onClick={() => setCount(prev => prev - 1)}>-</button>
                <span>{count}</span>
                <button onClick={() => setCount(prev => prev + 1)}>+</button>
            </div>
        </>
        
    )
}


export default ProtectedRoute
