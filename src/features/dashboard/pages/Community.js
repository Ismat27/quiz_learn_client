import React from 'react'
import styled from 'styled-components'

const Community = () => {
  return (
    <Wrapper>
        <div>
            <div className='capitalize section-header'>
                <h1 className='section-title'>
                    join our community
                </h1>
                <p className='section-info'>
                    join our social media and<br/> comminuty for more update.
                </p>
                <div className='community'>
                    <button className='btn'>telegram</button>
                    <button className='btn'>twitter</button>
                    <button className='btn'>facebook</button>
                    <button className='btn'>discord</button>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
min-height: 100vh;
max-width: 576px;
margin: auto;
display: grid;
.section-header {
    text-align: center;
}
.section-info {
    font-weight: 600;
    color: rgba(0, 0, 0, 0.49);
    font-size: 18px;
    margin-top: .5rem;
}
.community {
    margin-top: 3rem;
    display: grid;
    gap: 1rem;
    place-content: center;
}
button {
    min-width: 150px;
    max-width: 200px;
    background-color: var(--bg-blue);
    color: var(--white-color);
    border: none;
    border-radius: 10px;
    padding: 1rem;
    font-weight: 600;
    text-transform: capitalize;
}
@media (min-width: 576px) {
    place-items: center;
    .community {
        grid-template-columns: repeat(2, 200px);
        gap: 3rem 2rem;
    }
}
`

export default Community