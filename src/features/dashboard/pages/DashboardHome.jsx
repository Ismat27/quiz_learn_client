import { useGlobalContext } from "../../../app/AppContext"
import UserAssets from "../components/UserAssets"
import EarningsHistory from "../components/EarningsHistory"
import styled from "styled-components"
import { useDashboardContext } from "../../../context/DashboardContext"

const DashboardHome = () => {
    
    const {
        loading,
        error,
        quiz_sessions, 
        referrals, 
        total_referrals,
        total_points
    } = useDashboardContext()

    const {userDetails} =  useGlobalContext()

    if (error) {
        return <h1>an error occured, pls reload or logout and login again</h1>
    }
    
    if (loading) {
        return <h1>loading...</h1>
    }    

    return (
        <Wrapper className="dashboard-home">
            <h1>Dashboard</h1>
            <p className="capitalize welcome-p">
                <strong>welcome, {userDetails.username}</strong>
            </p>
            <UserAssets 
                total_points={total_points}
                total_referrals={total_referrals}
            />
            <EarningsHistory 
                data={quiz_sessions}
            />
            {referrals.map((user) => {
                return <h4 key={user.referred_user}>{user.referred_user}</h4>
            })}
        </Wrapper>
    )
}

const Wrapper = styled.div`
padding-block: 1rem;

@media (min-width: 768px) {
  
}
@media (min-width: 992px) {
    padding-block: 2rem;
}
`

export default DashboardHome