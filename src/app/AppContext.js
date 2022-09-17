import { useState, createContext } from "react";
export const Context = createContext() 

const AppContext = ({stored_token, children}) => {
    const [login , setLogin] = useState(stored_token?true:false)
    const [token, setToken] = useState(stored_token)
    const contextValue = {
        login,
        setLogin,
        token,
        setToken
    }
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
    
}

export default AppContext
