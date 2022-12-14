import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { Context } from "../../app/AppContext"
import styled from "styled-components"
import logo from '../../images/logo.png'
import Footer from "../../components/Footer"
import { useGlobalContext } from "../../app/AppContext"

const LoginForm = () => {
    const {setUserDetails} = useGlobalContext()
    const [username, setUsername ]= useState('')
    const [password, setPassword] = useState('')
    const {setLogin, setToken} = useContext(Context)
    const nav = useNavigate()
    const formSubmit = (event) => {
        event.preventDefault()
        axios.post('http://127.0.0.1:8000/login/', {
            username, password
        })
        .then(response => {
            const data = response.data
            const {token, user} = data
            localStorage.setItem('token', token)
            localStorage.setItem('userDetails', JSON.stringify(user))
            setToken(token)
            setPassword('')
            setUsername('')
            setLogin(true)
            setUserDetails(user)
            nav('/dashboard')
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <>

            <Wrapper className="auth-page">
                <article>
                    <img src={logo} alt='giftedbrain' className="logo" />
                    <h2>sign in</h2>
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
                        <button className="btn loginBtn capitalize">login</button>
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
