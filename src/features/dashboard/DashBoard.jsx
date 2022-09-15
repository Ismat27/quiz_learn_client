import { Navigate, Route } from "react-router-dom";
import DashboardHome from "./pages/DashboardHome";
import DashboardSettings from "./pages/DashBoardSettings";

const Dashboard = ({login=true}) => {
    if (!login) {
        return <Navigate to={'/'} />
    }
    return (
        <>
           <Route index element={<DashboardHome/>}/> 
           <Route path="settings" element={<DashboardSettings/>}/> 
        </>   
    )
}

export default Dashboard