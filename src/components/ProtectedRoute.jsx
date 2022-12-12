import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { Context } from "../app/AppContext"

const ProtectedRoute = () => {
    const { login } = useContext(Context)
    if (!login) {
        return <Navigate to={'/'} replace />
    }
    
    return (
        <>
            <Outlet/>
        </>
        
    )
}


export default ProtectedRoute
