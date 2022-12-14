import { useEffect, useState } from "react"
import axios from "axios"
import { useGlobalContext } from "../../../app/AppContext"
import UserAssets from "../components/UserAssets"
import EarningsHistory from "../components/EarningsHistory"
import styled from "styled-components"

const DashboardHome = () => {
    const [referrals, setReferrals] = useState([])
    const [quizSessions, setQuizSessions] = useState([])
    const [totalPoints, setTotalPoints] = useState(0)
    const [totalReferrals, setTotalReferrals] = useState(0)

    const {token, setLogin, userDetails} =  useGlobalContext()
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/dashboard/', {
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            const {data} = response
            // console.log(data);
            const { referrals, total_referrals, total_points, quiz_sessions } = data
            setReferrals(referrals)
            setTotalReferrals(total_referrals)
            setTotalPoints(total_points)
            setQuizSessions(quiz_sessions)
            setLogin(true)
        })
        .catch(error => {
            console.log(error);
            setLogin(false)
        })
    
        }, [token, setLogin, setReferrals])


    // if (referrals.length <=0) {
    //     return <h1>no items</h1>
    // }

    return (
        <Wrapper className="dashboard-home">
            <h1>Dashboard</h1>
            <p className="capitalize welcome-p">
                <strong>welcome, {userDetails.username}</strong>
            </p>
            <UserAssets 
                total_points={totalPoints}
                total_referrals={totalReferrals}
            />
            <EarningsHistory 
                data={quizSessions}
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