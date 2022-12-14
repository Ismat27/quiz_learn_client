import { useState, createContext, useContext } from "react";
import jwt_decode from 'jwt-decode'
export const Context = createContext() 
let user  = localStorage.getItem('userDetails') || '{}'
user = JSON.parse(user)

const AppContext = ({stored_token, children}) => {

    let tokenExpired = true

    if (stored_token) {
        const decoded = jwt_decode(stored_token)
        const exp = decoded.exp
        const expDate = new Date(exp * 1000)
        tokenExpired = expDate.getTime() < new Date().getTime()
    }
    
    const [userDetails, setUserDetails] = useState(tokenExpired?{}:user)
    const [login , setLogin] = useState(tokenExpired?false:true)
    const [token, setToken] = useState(stored_token)

    const logoutFunction = () => {
        localStorage.setItem('token', '')
        setLogin(false)
        setToken('')
        setUserDetails({})
        localStorage.setItem('userDetails', '{}')
    }

    const contextValue = {
        login,
        setLogin,
        token,
        setToken,
        userDetails,
        setUserDetails,
        logoutFunction
    }
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
    
}

const useGlobalContext = () => {
    return useContext(Context)
}

export { useGlobalContext }

export default AppContext
