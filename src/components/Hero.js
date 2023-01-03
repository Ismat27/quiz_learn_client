import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import img1 from '../images/db_1.png'
import img2 from '../images/db_2.png'
import { useGlobalContext } from "../app/AppContext"
const Hero = () => {

    const {login} = useGlobalContext()
    const navigate = useNavigate()

  return (
    <Wrapper>
        <article className="home-page">
            <div className="capitalize">
                <h1>we breed and reward intellectuals</h1>
                <p className="hero-p">earn and learn unlimitedly as a memeber...</p>
                <button onClick={() => navigate(`${login? '/dashboard' : '/login'}`)} className="btn action-btn2">get started</button>
            </div>
            <div className="hero-images">
                <img className="img-1" src={img1} />
                <img className="img-2" src={img2} />
            </div>
        </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
margin-bottom: 100px;
h1 {
    margin-bottom: 0.5rem;
}
.hero-p {
    font-weight: 400;
    color: rgba(0, 0, 0, 0.68);
    margin-bottom: 2rem;
}
button {
    margin-bottom: 2rem;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 1px;
}
img {
    max-width: 100%;
}
article {
    margin-left: 5%;
}
.hero-images {
    position: relative;
    height: 200px;
    img {
        position: absolute;
        height: 100%;
    }
    .img-1 {
        right: 0;
    }
    .img-2 {
        top: 40%;
        left: 0;
    }
}
@media (min-width: 576px) {
    article {
        display: grid;
        grid-template-columns: 40% 60%;
    }
    .hero-images {
        height: 200px;
        img {
            height: 100%;
        }
        .img-2 {
            top: 30%;
            left: 0;
        }
    }
}
@media (min-width: 768px) {
    .hero-images {
        height: 300px;
    }
}
@media(min-width: 992px) {
    margin-top: 50px;
    margin-bottom: 220px;
    h1 {
        line-height: 120%;
        font-size: 2.5rem;
    }
    .hero-images {
        height: 350px;
    }
}
`

export default Hero