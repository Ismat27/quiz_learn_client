import styled from 'styled-components'
import Footer from './Footer'
import { useGlobalContext } from '../app/AppContext'
import { useNavigate } from 'react-router-dom'

const Pricing = () => {

    const {plan, setPlan} = useGlobalContext()
    const navigate = useNavigate()

  return (
    <>
        <Wrapper>
            <div className='section-info'>
                <h2>choose your plan.</h2>
                <p>choose  your prefered package and press the continue button.</p>
            </div>
            <div className='price-cards'>
                <article 
                    className={`${plan === 'weekly'? 'price-card active': 'price-card'}`}
                    onClick={() => setPlan('weekly')}
                >
                    <p className='type'>weekly plan</p>
                    <p className='price'>
                        <span className='naira'>#2,400</span>/
                        <span>$4</span>
                    </p>
                    <p>available for 6 month</p>
                    <p>15 question per day</p>
                    <p>winners get 20k each</p>
                    <p>5 winners</p>
                </article>
                <article 
                    className={`${plan === 'monthly'? 'price-card active': 'price-card'}`}
                    onClick={() => setPlan('monthly')}
                >
                    <p className='type'>monthly plan</p>
                    <p className='price'>
                        <span className='naira'>#4,600</span>/
                        <span>$7.60</span>
                    </p>
                    <p>available for 6 month</p>
                    <p>team support</p>
                    <p>15 question per day</p>
                    <p>1st get 100k, 2nd get 75k, 3rd get 50k</p>
                    <p>3 winners</p>
                </article>
            </div>
            <button 
                className='btn'
                onClick={() => navigate('/payment')}
            >
            continue
            </button>
        </Wrapper>
        <Footer/>
    </>
  )
}

const Wrapper = styled.section`
padding-top: 4rem;
min-height: 80vh;
text-transform: capitalize;
width: 90%;
max-width: 700px;
margin: auto;
.section-info {
    text-align: center;
    p {
        margin-block: 1rem 2rem;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.64);
    }
}
.price-cards {
    display: grid;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
    }
.price-card {
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.59);
    border: 2px solid #000000;
    border-radius: var(--border-radius);
    color: var(--ash-color);
    cursor: pointer;
    p {
        margin-bottom: 1rem;
    }
}
.price-card.active {
    background-color: var(--bg-blue);
    border: 8px solid var(--bg-blue);
    border-radius: var(--border-radius);
    color: var( --white-color)
}
.type {
    font-weight: 600;
    font-size: 20px;
    text-align: center;
}
.price {
    font-weight: 600;
}
.naira {
    font-size: 2rem;
}
button {
    display: block;
    width: 200px;
    margin: auto;
    background-color: var(--bg-blue);
    border-radius: var(--border-radius);
    color: var( --white-color);
    border: none;
    padding: 1rem;
    font-size: 16px;
}
@media (min-width: 576px) {
    .price-cards {
        grid-template-columns: repeat(2, 250px);
        margin-bottom: 5rem;
    }
}
@media (min-width: 768px) {
    .price-cards {
        grid-template-columns: repeat(2, 250px);
        margin-bottom: 5rem;
    }
}
`

export default Pricing