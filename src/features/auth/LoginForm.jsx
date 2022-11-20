import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Context } from "../../app/AppContext"

const LoginForm = () => {
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
            const {token} = data
            localStorage.setItem('token', token)
            setToken(token)
            setPassword('')
            setUsername('')
            setLogin(true)
            nav('/dashboard')
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <main>
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
                <button className="btn loginBtn">login</button>
            </form>
            <div>
                <p>Don't have an account? signup here</p>
            </div>
        </main>
    )
}

export default LoginForm
