import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { Context } from "../../app/AppContext"
import styled from "styled-components"
import logo from '../../images/logo.png'
import Footer from "../../components/Footer"
import { useGlobalContext } from "../../app/AppContext"

import { LinearProgress, Alert } from '@mui/material';

const BASE_URL = process.env.REACT_APP_BASE_API_URL

const LoginForm = () => {
    const {setUserDetails} = useGlobalContext()
    const [username, setUsername ]= useState('')
    const [password, setPassword] = useState('')
    const {setLogin, setToken} = useContext(Context)
    const nav = useNavigate()

    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [logingIn, setLogingIn] = useState(false)

    const formSubmit = (event) => {
        setLogingIn(true)
        event.preventDefault()
        axios.post(`${BASE_URL}/login/`, {
            username, password
        })
        .then(response => {
            const data = response.data
            const {token, user} = data
            localStorage.setItem('token', token)
            localStorage.setItem('userDetails', JSON.stringify(user))
            setLogingIn(false)
            setToken(token)
            setPassword('')
            setUsername('')
            setLogin(true)
            setUserDetails(user)
            nav('/dashboard')
        })
        .catch(error => {
            let message='unable to login'
            if (error.response) {
                message = error.response.data.message
            }
            setErrorMessage(message)
            setError(true)
            setLogingIn(false)
        })
    }

    return (
        <>
            {
                error &&
            <Alert onClose={() => {setError(false)}} variant="filled" severity="error">
                {errorMessage}
            </Alert>
            
            }
            {
                logingIn &&
                <LinearProgress />
            }
            <Wrapper className="auth-page">
                <article>
                    <img src={logo} alt='giftedbrain' className="logo" />
                    <h2 className="section-title">sign in</h2>
                </article>
                <form onSubmit={formSubmit}>
                    <div className="username">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            name="username" 
                            type="text" 
                            value={username}
                            onChange={event => setUsername(event.target.value)}
                        />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                        />
                    </div>
                    <div className="prompt capitalize">
                        <input 
                            type={'checkbox'}
                        />
                        <p>
                            remember me
                        </p>
                    </div>
                    <div>
                        <button disabled={logingIn} className="btn loginBtn capitalize">login</button>
                    </div>
                </form>
                <div className="alt capitalize">
                    <p>Don't have an account? <Link to={'/signup'}>click here.....</Link></p>
                </div>
            </Wrapper>
            <Footer />
        </>
    )
}

const Wrapper = styled.main`
`
export default LoginForm
