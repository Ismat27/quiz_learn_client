import React from 'react'
import styled from 'styled-components'

const HowToParticipate = () => {
  return (
    <Wrapper>
        <div className='home-page content'>
            <div className="capitalize h-box">
                <h2>how to particicpate</h2>
            </div>
            <ul className='steps'>
                <li className='capitalize step'>
                    <h3>1. register</h3>
                    <p>sign up to become a member of gifted brainz.</p>
                </li>
                <li className='capitalize step'>
                    <h3>2. take a challenge</h3>
                    <p>particicpate in a challenge. answer 15 question to earn (sQP).</p>
                </li>
                <li className='capitalize step'>
                    <h3>3. choose your plan</h3>
                    <p>subscribe directly on the site with weekly plan or monthly plan. </p>
                </li>
                <li className='capitalize step'>
                    <h3>4. refer and earn</h3>
                    <p>invite your friend. let them about this platform and you’ll earn 40% affiliate commision.</p>
                </li>
            </ul>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding-top: 3.5rem;
.content {
    width: 90%;
}
.steps {
    display: grid;
    row-gap: 1rem;
    column-gap: 5px;
    grid-template-columns: 50% 50%;
    max-width: 700px;
    margin: auto;
}
.step {
    h3 {
        margin-bottom: .5rem;
    }
    p {
        color: rgba(0, 0, 0, 0.56);
        font-weight: 600;
    }
}
@media (min-width: 576px) {
    .steps {
        grid-template-columns: repeat(2, 230px);
        justify-content: space-between;
        align-items: start;
        row-gap: 1rem;
    }
    .step {
        p {
            font-size: 18px;
        }
    }
}
`

export default HowToParticipate