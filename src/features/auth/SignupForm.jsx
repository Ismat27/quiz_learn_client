import { useState } from "react"
import axios from "axios"
import logo from '../../images/logo.png'
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import Footer from "../../components/Footer"

const USERNAME_REGEX = /^[a-zA-Z_-]{3,16}$/igm
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm

const SignupForm = () => {
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pass, setPass] = useState('')

    const nav = useNavigate()

    const formSubmit = (event) => {
        event.preventDefault()
        // const test1 = USERNAME_REGEX.test(username)
        // const test2 = EMAIL_REGEX.test(email)
        // const test3 = PASSWORD_REGEX.test(password)
        // if (!test1) {
        //     alert('username does not meet requiements')
        //     return
        // }
        // if (!test2) {
        //     alert('email does not meet requiements')
        //     return
        // }
        // if (!test3) {
        //     alert('password does not meet requiements')
        //     return
        // }
        axios.post('http://127.0.0.1:8000/signup/', {
            username, 
            first_name:firstName, 
            last_name:lastName, 
            password, 
            email
        })
        .then((response) => {
            nav('/login')
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <>

        <Wrapper className="auth-page">
            <article>
                <img src={logo} alt='giftedbrain' className="logo" />
                <h2>sign up</h2>
            </article>
            <form onSubmit={formSubmit}>
                <div className="formField username">
                    <label htmlFor="username">Username</label>
                    <input 
                        id="username" 
                        name="username" 
                        type="text"
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                    />
                </div>
                {/* <div className="fullname">
                    <div className="formField firstName">
                        <label htmlFor="firstName">First name</label>
                        <input 
                            id="firstName" 
                            name="firstName" 
                            type="text"
                            value={firstName}
                            onChange={event => setFirstName(event.target.value)}
                        />
                    </div>
                    <div className="formField lastName">
                        <label htmlFor="lastName">Last name</label>
                        <input 
                            id="lastName" 
                            name="lastName" 
                            type="text"
                            value={lastName}
                            onChange={event => setLastName(event.target.value)}
                        />
                    </div>
                </div> */}
                <div className="formField email">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                </div>
                <div className="formField password">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                </div>
                <div className="formField confirmPassword">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        id="confirmPassword"
                        value={pass}
                        onChange={event => setPass(event.target.value)}
                    />
                </div>
                <div className="prompt capitalize">
                    <input 
                        type={'checkbox'}
                    />
                    <p>
                        i have agree to the <span>terms & conditions</span> and the <span>privacy & policy</span> of this website.
                    </p>
                </div>
                <div>
                    <button className="btn signupBtn capitalize">Sign up</button>
                </div>
            </form>
            <div className="alt capitalize">
                <p>
                    already have an existing account? <Link to={'/login'}>click here.....</Link>
                </p>
            </div>
        </Wrapper>
        <Footer />
        </>
    )
}

const Wrapper = styled.main`

`

export default SignupForm