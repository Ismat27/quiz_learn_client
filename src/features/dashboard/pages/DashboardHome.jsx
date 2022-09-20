import { useEffect, useContext, useState } from "react"
import { Context } from "../../../app/AppContext"

const DashboardHome = () => {
    const [referrals, setReferrals] = useState([])
    const {token} =  useContext(Context)
    
    useEffect(() => {
        fetch('http://127.0.0.1:8000/dashboard/', {
        method: 'GET',
        headers: {
            'Authorization': `Token ${token}`,
            'Content-Type': 'application/json'
        }
        })
        .then(response => response.json())
        .then(data => {
            setReferrals(data.referrals)
            console.log(data);
            
        })
        .catch(error => {
            console.log(error);
        })
        }, [token])

    return (
        <>
        <h1>Dashboard Home</h1>
        {referrals.map((user) => {
            return <h4 key={user.referred_user}>{user.referred_user}</h4>
        })}

        </>
    )
}

export default DashboardHome