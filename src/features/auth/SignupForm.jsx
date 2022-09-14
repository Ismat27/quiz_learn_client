const SignupForm = () => {
    return (
        <main>
            <form>
                <div className="formField username">
                    <label htmlFor="username"></label>
                    <input id="username" name="username" type="text" />
                </div>
                <div className="fullname">
                    <div className="formField firstName">
                        <label htmlFor="firstName"></label>
                        <input id="firstName" name="firstName" type="text" />
                    </div>
                    <div className="lastName formField">
                        <label htmlFor="lastName"></label>
                        <input id="lastName" name="lastName" type="text" />
                    </div>
                </div>
                <div className="formField email">
                    <label htmlFor="email"></label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="formField password">
                    <label htmlFor="password"></label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className="formField confirmPassword">
                    <label htmlFor="confirmPassword"></label>
                    <input type="password" name="confirmPassword" id="confirmPassword" />
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