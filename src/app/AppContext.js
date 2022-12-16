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

    const [plan, setPlan] = useState('monthly')
    const price = {
        monthly: 460000, // in kobo
        weekly: 240000
    }

    const logoutFunction = () => {
        localStorage.setItem('token', '')
        setLogin(false)
        setToken('')
        setUserDetails({})
        localStorage.setItem('userDetails', '{}')
    }

    const updateUserDetails = (data) => {
        setUserDetails(data)
        localStorage.setItem('userDetails', JSON.stringify(data))
    }

    const contextValue = {
        login,
        setLogin,
        token,
        setToken,
        userDetails,
        setUserDetails,
        logoutFunction,
        updateUserDetails,
        plan, setPlan, price
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
