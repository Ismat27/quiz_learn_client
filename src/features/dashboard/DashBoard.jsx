import { useState } from "react"
import { Outlet } from "react-router-dom"
import styled from "styled-components"
import Hamburger from "../../components/Hamburger"
import SidebarNav from "./components/SidebarNav"
import Logo from "../../components/Logo"

const Dashboard = () => {

    const [sideOpen, setSideOpen] = useState(false)

    const toggleNav = () => {
        setSideOpen(!sideOpen)
    }
    
    return (
        <>
            <Wrapper className="dashboard-layout">
                <SidebarNav 
                    open={sideOpen}
                    handleOpen={toggleNav}
                />
                <div className="aa">
                    <header>
                        <div className="header">
                            <Logo />
                            <Hamburger 
                                open={sideOpen}
                                handleClick={toggleNav}
                            />
                        </div>
                    </header>
                    <main>
                        <Outlet/>
                    </main>
                </div>
            </Wrapper>
        </>   
    )
}

const Wrapper = styled.div`
@media (min-width: 992px) {
.aa {
    margin-left: 250px;
}
}
`

export default Dashboard
