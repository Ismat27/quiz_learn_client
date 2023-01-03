import styled from "styled-components"
import img1 from '../../../images/work_1.png'
import img2 from '../../../images/work_2.png'
import img3 from '../../../images/work_3.png'
import img4 from '../../../images/work_4.png'

const HowItWorks = () => {
  return (
    <Wrapper>
        <div className="home-page content">
            <div className="capitalize h-box">
                <h2>how it works</h2>
            </div>
            <div className="info">
                <article>
                    <img src={img1} alt='one-item' />
                    <p>
                        nigerians and other african countries can come and challenge one another.<br />
                    </p>
                    <br />
                    <p>in a daily active quiz competition and stand a chance to win cash prize more than #100,000 weekly/monthly respectively or it’s equivalent in uSDT.</p>
                </article>
                <article>
                    <img src={img2} alt='one-item' />
                    <p>you will acquire valuable skills and knowledge in blockchain, De-fi, nFTs, UI/UX Design, fashion/cosmetic and so on.</p>
                </article>
                <article>
                    <img src={img3} alt='one-item' />
                    <p>you will participate in intellectual contest for a life changing prize. you have the chance to join our innovative and creative team.</p>
                </article>
                <article>
                    <img src={img4} alt='one-item' />
                    <p>you enjoy steady affiliate earnings. refer your friends and earn 40% affiliate commision.</p>
                </article>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.h-box {
    text-align: center;
    margin-bottom: 2rem;
}
h2 {
    border: 2px solid #000000;
    padding-block: 0.2rem;
    display: inline-block;
    padding: 0.5rem;
}
.content {
    width: 90%;
    margin: auto;
    padding-top: 2rem;
}
article {
    max-width: 300px;
    text-transform: capitalize;
}
img {
    height: 300px;
}
p {
    color: rgba(0, 0, 0, 0.52);
    font-weight: 600;
}
.info {
    display: grid;
    justify-content: center;
    max-width: 700px;
    margin: auto;
    row-gap: 2rem
}
@media (min-width: 576px) {
.info {
    grid-template-columns: repeat(2, 250px);
    column-gap: 2rem
}
}
@media (min-width: 768px) {
.info {
    grid-template-columns: repeat(2, 300px);
    column-gap: 3rem;
    justify-content: space-between;
}
}
`

export default HowItWorks