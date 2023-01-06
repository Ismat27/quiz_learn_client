import React from 'react'
import styled from 'styled-components'
import atm from '../../../images/atms.png'
import spin from '../../../images/spin.png'
import cancel from '../../../images/cancel_icon.png'

const Features = () => {
  return (
    <Wrapper>
        <div className='home-page content'>
            <div className="capitalize h-box">
                <h2>features & benefits</h2>
            </div>
            <div className='capitalize cards'>
                <article className='card'>
                    <div className='card-img'>
                        <img src={atm}/>        
                    </div>
                    <div className='card-text'>
                        <h3>fast withdrawals</h3>
                        <p>we pay within 10-24hrs to your specific bank account.</p>
                    </div>
                </article>
                <article className='card'>
                    <div className='card-img'>
                        <img src={spin}/>        
                    </div>
                    <div className='card-text'>
                        <h3>spin and win</h3>
                        <p>win amazing price by simply spinning the wheel.</p>
                    </div>
                </article>
                <article className='card'>
                    <div className='card-img'>
                        <img src={cancel}/>        
                    </div>
                    <div className='card-text'>
                        <h3>referrals</h3>
                        <p>referrals is not compulsory.</p>
                    </div>
                </article>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.content {
    width: 90%;
}
margin-block: 4rem;
.cards {
    text-align: center;
    display: grid;
    gap: 1.5rem;
}
.card {
    border: 3px solid #000000;
    border-radius: 10px;
}
.card-img {
    padding: 1rem;
    background-color: #D9D9D9;
}
.card-text {
    padding: 1rem;
    font-weight: 600;
    p {
        color: rgba(0, 0, 0, 0.56);
    }
}
img {
    width: 200px;
    height: 200px;
}
@media (min-width: 576px) {
    margin-top: 4rem;
    .h-box {
        margin-bottom: 4rem;
    }
}
@media (min-width: 768px) {
    .cards {
        grid-template-columns: repeat(2, 330px);
        justify-content: space-between;
    }
}
@media (min-width: 992px) {
    .cards {
        grid-template-columns: repeat(3, 300px);
        justify-content: space-between;
    }
}
@media (min-width: 1200px) {
    .cards {
        grid-template-columns: repeat(3, 330px);
        justify-content: space-between;
    }
}
`

export default Features