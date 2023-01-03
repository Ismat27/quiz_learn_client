import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Hamburger from './Hamburger'
import { Link } from 'react-router-dom'

import { useGlobalContext } from '../app/AppContext'

const Header = () => {

    const { login, logoutFunction } = useGlobalContext()
    const [navOpen, setNavOpen] = useState(false)
    const navContainerRef = useRef(null)
    const navItemsRef = useRef(null)

    useEffect(() => {
        const linksHeight = navItemsRef.current.getBoundingClientRect().height;
        if (navOpen) {
            navContainerRef.current.style.height = `${linksHeight}px`
        }
        else {
            navContainerRef.current.style.height = 0
        }
    }, [navOpen])

    const closeNav = () => {
        setNavOpen(false)
    }

    return (
        <Wrapper>
            <div className='header-content home-page'>
                <div className='lh'>
                    <Logo />
                    <Hamburger 
                        open={navOpen}
                        handleClick={() => setNavOpen(!navOpen)}
                    />
                </div>
                <nav ref={navContainerRef} className='nav'>
                    <ul ref={navItemsRef} className='nav-items capitalize'>
                        <li className='nav-item'>
                            <Link onClick={closeNav} className='nav-link'>course</Link>
                        </li>
                        <li className='nav-item'>
                            <Link onClick={closeNav} className='nav-link'>career</Link>
                        </li>
                        <li className='nav-item'>
                            <Link onClick={closeNav} className='nav-link'>about us</Link>
                        </li>
                        {
                            login ?
                            <>
                                <li className='nav-item'>
                                    <Link onClick={closeNav} to={'/dashboard'} className='nav-link login-link'>dashboard</Link>
                                </li> 
                                <li className='nav-item'>
                                    <Link onClick={
                                        () => {
                                            logoutFunction()
                                            closeNav()
                                        }
                                    } to={'/'} className='nav-link login-link'>sign out</Link>
                                </li> 

                            </>
                            :
                            <li className='nav-item'>
                                <Link onClick={closeNav} to={'/login'} className='nav-link login-link'>sign in</Link>
                            </li>
                        }
                    </ul>
                </nav>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.header`
.header-content {
    padding-top: 1rem;
    width: 90%;
}
.lh {
    display: flex;
    justify-content: space-between;
}
.logo {
    width: 3rem;
}
.menu {
    align-self: flex-start;
}
.nav {
    height: 0;
    overflow: hidden;
    margin-top: 1rem;
}
.nav-items {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--bg-blue);
    padding: 1rem;
}
.nav-link {
    display: inline-block;
    color: #ffffff;
}
@media (min-width: 576px) {
    
}
@media (min-width: 768px) {
    .header-content {
        padding-top: 1rem;
        display: flex;
        justify-content: space-between;
        gap: 1rem;
    }
    .logo {
        width: 4.0rem;
    }
    .menu {
        display: none;
    }
    .nav {
        margin: 0;
        height: auto !important;
    }
    .nav-items {
        align-items: center;
        flex-direction: row;
        gap: 3rem;
        background-color: transparent;
        padding: 0;
    }
    .nav-link {
        color: #000000;
        font-weight: bold;
    }
    .login-link {
        background-color: var(--bg-blue);
        border-radius: 16px;
        color: white;
        padding: .5rem 1rem;
        text-align: center;
        min-width: 100px;
        font-weight: 400;
    }
}
@media (min-width: 992px) {
    .header-content {
        padding-top: 2rem;
    }
    .nav-link {
        font-size: 1.2rem;
    }
    .login-link {
        padding: .7rem 2rem;
        min-width: 150px;
    }
}
`

export default Header
