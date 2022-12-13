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

    const closeSidebar = () => {
        setSideOpen(false)
    }
    
    return (
        <>
            <Wrapper className="dashboard-layout">
                <SidebarNav 
                    open={sideOpen}
                    handleOpen={toggleNav}
                    closeSidebar={closeSidebar}
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
                    <div className="dashboard-content">
                        <main>
                            <Outlet/>
                        </main>
                    </div>
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
