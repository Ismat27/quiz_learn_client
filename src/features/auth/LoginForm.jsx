import { useState } from "react"

const LoginForm = () => {
    const [username, setUsername ]= useState('')
    const [password, setPassword] = useState('')

    const formSubmit = (event) => {
        event.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        };
        fetch('http://127.0.0.1:8000/login/', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    console.log(data)
                    setPassword('')
                    setUsername('')
                }
                else {
                    console.log('error');
                }
            })
            .catch(error => {
                console.log(error);
            });
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