import { createContext, useContext, useEffect, useReducer } from "react"
import { useGlobalContext } from "../app/AppContext"
import reducer from "../app/reducer/dashboardReducer"

const Context = createContext()
const initialData = {
    referrals: [],
    earnings: [],
    leaderboard: [],
    has_spinned: [],
    is_quiz: [],
    loading: true,
    error: false,
}

const DashboardContext = ({children}) => {
    const {token} = useGlobalContext();
    const [state, dispatch] = useReducer(reducer, initialData)
    useEffect(() => {
        console.log(token);
        dispatch({type:'LOAD_DATA'})
    }, [token])

  return (
    <Context.Provider 
        value={{
            ...state
        }}
    >
        {children}
    </Context.Provider>
  )
}

const useDashboardContext = () => {
    return useContext(Context)
}

export {useDashboardContext}
export default DashboardContext