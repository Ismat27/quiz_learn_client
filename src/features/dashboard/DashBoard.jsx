import { useState } from "react"
import { Outlet } from "react-router-dom"
import styled from "styled-components"
import Hamburger from "../../components/Hamburger"
import SidebarNav from "./components/SidebarNav"
import Logo from "../../components/Logo"
import { useDashboardContext } from "../../context/DashboardContext"
import CircularLoader from "../../components/CircularLoader"

const Dashboard = () => {

    const { error, loading } = useDashboardContext()

    const [sideOpen, setSideOpen] = useState(false)

    const toggleNav = () => {
        setSideOpen(!sideOpen)
    }

    const closeSidebar = () => {
        setSideOpen(false)
    }

    if (error) {
        return (
            <Wrapper>
                <div className="loading-div">
                    <h1>an error occured, pls reload or logout and login again</h1>
                </div>
            </Wrapper>
        )
    }
    
    if (loading) {
        return (
            <Wrapper>
                <div className="loading-div">
                    <h1>loading...</h1>
                    <CircularLoader />
                </div>
            </Wrapper>
        )
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
.header {
    align-items: flex-start;
}
.loading-div {
    text-align: center;
}
@media (min-width: 992px) {
.aa {
    margin-left: 250px;
}
}
`

export default Dashboard
