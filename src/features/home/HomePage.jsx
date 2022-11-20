import { NavLink } from "react-router-dom"
import { useGlobalContext } from "../../app/AppContext"

const HomePage = () => {
    const {login} = useGlobalContext()

    return (
        <>
            <h1>
                Welcome
            </h1>
            <nav>
                {
                login?
                <NavLink to={'/dashboard'}>dasboard</NavLink>:
                <NavLink to={'/login'}>login</NavLink>
                }
            </nav>
            
        </>
    )
}

export default HomePage