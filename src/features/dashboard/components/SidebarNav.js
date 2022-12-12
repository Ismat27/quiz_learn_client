import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { sidebarItems, sidebarItemsLower, sidebarItemsUpper } from '../data/sidebar'
import Hamburger from '../../../components/Hamburger'
import Logo from '../../../components/Logo'
import { Context } from '../../../app/AppContext'
import { FiLogOut } from "react-icons/fi"


const SidebarNav = ({open, handleOpen}) => {

    const {setLogin, setToken} = useContext(Context)
    const logout = () => {
        localStorage.setItem('token', '')
        setLogin(false)
        setToken('')
    }

  return (
    <Wrapper className={`${open? 'open': ''}`}>
        <div className='header'>
            <Logo />
            <Hamburger 
                open={open}
                handleClick={handleOpen}
            />
        </div>
        <nav>
            <ul className='upper-nav'>
                {
                    sidebarItemsUpper.map((item, index) => {
                        return (
                            <li key={index} className='sidebar-item'>
                                <NavLink
                                    className={'sidebar-link'}
                                    to={item.to}
                                >
                                    <span>{item.icon}</span>
                                    <span className='sidebar-text capitalize'>{item.text}</span>
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <ul className='mid-nav'>
                {
                    sidebarItems.map((item, index) => {
                        return (
                            <li key={index} className='sidebar-item'>
                                <NavLink
                                    className={'sidebar-link'}
                                    to={item.to}
                                >
                                    <span>{item.icon}</span>
                                    <span className='sidebar-text capitalize'>{item.text}</span>
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <ul className='lower-nav'>
                {
                    sidebarItemsLower.map((item, index) => {
                        return (
                            <li key={index} className='sidebar-item'>
                                <NavLink
                                    className={'sidebar-link'}
                                    to={item.to}
                                >
                                    <span>{item.icon}</span>
                                    <span className='sidebar-text capitalize'>{item.text}</span>
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <li>
                <Link 
                    className='capitalize sidebar-link logout' 
                    onClick={logout} 
                    to={'/'}
                >
                    <span><FiLogOut /></span>
                    <span className='sidebar-text'>log out</span>
                </Link>
            </li>
        </nav>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
* {
    transition: all 300ms ease-in-out;
}
.header {
    margin-bottom: 2rem;
}
position: fixed;
top: 0;
left: 0;
bottom:0;
overflow-y: scroll;
width: 100vw;
z-index: 100;
min-height: 100vh;
nav {
    display: flex;
    flex-direction: column;
    gap: 5rem;
}
ul {
    display: flex;
    flex-direction: column;
    gap: .8rem;
}
li {
    
}
.sidebar-link {
    display: flex;
    align-items: center;
    gap: .8rem;
    padding: 1rem 1rem;
    color: #000000;
    font-weight: 600;
}

.sidebar-text {
    font-size: 1.1rem;
}
.sidebar-link.active, .sidebar-link:hover {
    background: #5852FE;
    color: var(--white-color);
    svg {
        color: var(--white-color);
    }
}
svg {
    color: #4A90E2;
    font-size: 2rem;
}
.lower-nav {
    padding-block: 2rem;
    background: #5852FE;
    color: var(--white-color);
    svg, a {
        color: var(--white-color);
    }
}
.logout {
    padding-bottom: 6rem;
    .sidebar-text, svg {
        color: red;
    }
}
@media (min-width: 992px) {
    ${'' /* position: unset; */}
    max-width: 250px;
    .header .menu {
        display: none;
    }
    
}
`

export default SidebarNav