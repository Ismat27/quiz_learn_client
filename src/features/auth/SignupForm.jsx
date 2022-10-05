import { useState } from "react"

const SignupForm = () => {
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pass, setPass] = useState('')

    const formSubmit = (event) => {
        event.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, first_name:firstName, last_name:lastName, password, email })
        };
        fetch('http://127.0.0.1:8000/signup/', requestOptions)
            .then(response => {
                if (response.status >=200 && response.status<=299) {
                    return response.json()
                }
                else {
                    throw Error(response.statusText);
                }
            })
            .then(data => {
                setPassword('')
                setUsername('')
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <main>
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
                <div className="fullname">
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
                </div>
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
                <button className="btn signupBtn">Signup</button>
            </form>
            <div>
                <p>
                    Have an account? login here
                </p>
            </div>
        </main>
    )
}

export default SignupForm