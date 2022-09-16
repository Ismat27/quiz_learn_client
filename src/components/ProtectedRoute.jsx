import { useState } from "react"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
    const [token, setToken] = useState('')

    const tempToken = localStorage.getItem('token')

    if (tempToken) {
        setToken(tempToken)
    }

    if (!token) {
        return <Navigate to={'/'} replace />
    }

    return (
        <Outlet/>
    )
}

export default ProtectedRoute
