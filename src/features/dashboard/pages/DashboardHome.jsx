import { useEffect, useContext, useState } from "react"
import axios from "axios"
import { Context } from "../../../app/AppContext"
import UserAssets from "../components/UserAssets"
import EarningsHistory from "../components/EarningsHistory"
import styled from "styled-components"

const DashboardHome = () => {
    const [referrals, setReferrals] = useState([])
    const {token, setLogin} =  useContext(Context)
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/dashboard/', {
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            const {data} = response
            const { referrals } = data
            setReferrals(referrals)
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
                <strong>welcome, jays</strong>
            </p>
            <UserAssets />
            <EarningsHistory />
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