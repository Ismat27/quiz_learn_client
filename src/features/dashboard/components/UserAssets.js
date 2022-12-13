import React from 'react'
import styled from 'styled-components'

const UserAssets = () => {
  return (
    <Wrapper>
        <article className='total-earnings capitalize'>
            <h3>total earnings</h3>
            <span className='value'>#203,978</span>
        </article>

        <article className='total-points capitalize'>
            <h3>total points</h3>
            <span className='value'>2000</span>
            <span className='unit'>SQP</span>
        </article>

        <article className='referral-earnings capitalize'>
            <h3>total referrals</h3>
            <span className='value'>#12,000</span>
        </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
article {
    margin: auto;
    margin-bottom: 40px;
    padding: 2rem 1rem;
    text-align: center;
    color: var(--white-color);
    max-width: 320px;
    border-radius: 10px;
    h3 {
        opacity: .6;
        margin-bottom: 1rem;
    }
}
.total-earnings {
    background-color: var(--bg-blue);
}

.total-points {
    background: #34A853;
}
.referral-earnings {
    background: #F5761A;
}
.value {
    font-size: 32px;
    font-weight: 600;
}
@media (min-width: 576px) {
    display: grid;
    gap: 40px;
    grid-template-columns: repeat(2, auto);
    article {
        margin: 0;
    }
    
}
@media (min-width: 768px) {
    grid-template-columns: repeat(3, auto);
    gap: 40px;
}
@media (min-width: 992px) {
    grid-template-columns: repeat(3, auto)

}

`

export default UserAssets
