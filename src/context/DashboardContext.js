import axios from "axios"
import { createContext, useCallback, useContext, useEffect, useReducer } from "react"
import { useGlobalContext } from "../app/AppContext"
import reducer from "../app/reducer/dashboardReducer"

const BASE_URL = process.env.REACT_APP_BASE_API_URL

const Context = createContext()
const initialData = {
    referrals: [],
    earnings: [],
    leaderboard: [],
    quiz_sessions: [],
    total_referrals: 0,
    total_points: 0,
    has_spinned: false,
    is_quiz: true,
    loading: true,
    error: false,
}

const DashboardContext = ({children}) => {
    const {token} = useGlobalContext();
    const [state, dispatch] = useReducer(reducer, initialData)

    const loadDashboardData = useCallback(() => {
        if (!token) {
            return
        }
        dispatch({type: 'LOAD_DATA_BEGIN'})
        axios.get(`${BASE_URL}/dashboard/`, {
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            const {data} =  response
            dispatch({type:'LOAD_DATA_SUCCESS', payload: data})
        })
        .catch(() => {
            dispatch({type: 'LOAD_DATA_ERROR'})
        })
    }, [token])

    useEffect(() => {
        loadDashboardData()
    }, [loadDashboardData])

  return (
    <Context.Provider 
        value={{
            ...state,
            loadDashboardData
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