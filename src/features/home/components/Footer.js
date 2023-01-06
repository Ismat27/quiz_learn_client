import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
        <div className='home-page content'>
            <div className='capitalize top'>
                <h2>join our newsletter</h2>
                <div className='i-box'>
                    <input 
                        type={'email'}
                        placeholder='hello@smartquiz.com'
                    />
                    <button>join now</button>
                </div>
            </div>
            <div className='links'>
                <div className='capitalize'>
                    <h3>products</h3>
                    <ul>
                        <li><Link>course</Link></li>
                        <li><Link>quiz</Link></li>
                        <li><Link>refer program</Link></li>
                        <li><Link>spin rewards</Link></li>
                    </ul>
                </div>
                <div className='capitalize'>
                    <h3>about</h3>
                    <ul>
                        <li><Link>what we do</Link></li>
                        <li><Link>our mission</Link></li>
                        <li><Link>contact us</Link></li>
                        <li><Link>FAQ</Link></li>
                        <li><Link>privacy  & policy</Link></li>
                    </ul>
                </div>
                <div className='capitalize'>
                    <h3>Resources</h3>
                    <ul>
                        <li><Link>Docs</Link></li>
                        <li><Link>careers</Link></li>
                        <li><Link>blog</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <p className='capitalize last-p'>
            &#169; {new Date().getFullYear()} copyright by smartquiz. All rights reserved
        </p>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
background-color: var(--bg-blue);
padding-block: 2rem 1rem;
.content {
    width: 90%;
    max-width: 700px;
}
h2, h3 {
    color: #FFFFFF;
}
.top {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 600px;
    margin: auto;
    margin-bottom: 1rem;
}
input, button {
    padding: 1rem;
    background-color: #FFFFFF;
    border: none;
}
.i-box {
    display: flex;
    width: 100%;
    background-color: rgba(0, 0, 0, .6);
    gap: 1px;
    border-radius: 10px;
}
input {
    flex-basis: 70%;
    outline: none;
    border-radius: 10px 0 0 10px;
    font-size: 1rem;
    font-style: italic;
    color: rgba(0, 0, 0, 0.5);

}
button {
    flex-basis: 30%;
    color: #D80D0D;
    font-weight: 700;
    border-radius: 0px 10px 10px 0px;
    text-transform: uppercase;
    cursor: pointer;
}
.links {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 2rem;
    h3 {
        margin-bottom: 1rem;
        font-weight: 600;
    }
    ul {
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }
    a {
        color: rgba(255, 255, 255, 0.66);
        font-weight: 600;
    }
}
.last-p {
    color: rgba(255, 255, 255, 0.66);
    font-weight: 600;
    text-align: center;
}
@media (min-width: 576px) {
    .top {
        margin-bottom: 2rem;
    }
    input {
        font-size: 1.5rem;
    }
    button {
        font-size: 1.2rem;
    }
}
`

export default Footer