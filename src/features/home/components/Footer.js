import React from 'react'
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
            <div>
                <div></div>
            </div>
        </div>
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