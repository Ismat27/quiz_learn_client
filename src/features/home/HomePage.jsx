import { NavLink } from "react-router-dom"

const HomePage = () => {
    return (
        <h1>
            Welcome
            <nav>
                <NavLink to={'/dashboard'}>dasboard</NavLink>
            </nav>
        </h1>
    )
}

export default HomePage