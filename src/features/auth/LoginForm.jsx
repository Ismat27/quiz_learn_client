const LoginForm = () => {
    return (
        <main>
            <form>
                <div className="username">
                    <label htmlFor="username">Username</label>
                    <input id="username" name="username" type="text" />
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
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