import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

const Footer = () => {
  return (
    <Wrapper>
        <div className='content'>
            <div>
                <Link to={'/'} className='back'><BsArrowLeft /> back to home</Link>
            </div>
            <div className='mid'>
                <Link href='/'>privacy & policy</Link>
            </div>
            <div>
                <Link href='/'>terms & conditions</Link>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
background-color: var(--bg-blue);
text-transform: capitalize;
padding-block: 3.3rem;
margin-top: 30px;
* {
    color: #FFFFFF; 
}
.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}
.back {
    display: flex;
    align-items: center;
    gap: 1rem;
}
@media (min-width: 768px) {
    .content {
        flex-direction: row;
    }
    .mid {
        border-left: 1px solid #FFFFFF;
        border-right: 1px solid #FFFFFF;
        padding: 0 20px;
    }
}
`

export default Footer