import styled from "styled-components"

const About = () => {
  return (
    <Wrapper>
        <div className="home-page">
            <div className="capitalize content">
                <h2>about gifted brainz</h2>
                <p>
                    this is a platform where Africans can learn and challenge others in active Quiz competition and stand a chance to win cash prizes up to #200,000 or its Equizalent in USDT. It's an initiative that seeks to promote intellectual growth, and also seek to educate and elighten Africans with information, knowledge and skill in areas such as Afica History, Sport, Web Development, Blockchain, Cryptocurrency, Quantum mechanics, programming etc...
                </p>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
background: #5852FE;
padding: 2rem 5%;
h2 {
    color: #FFFFFF;
    font-weight: 600;
    margin-bottom: .8rem;
}
p {
    color: rgba(255, 255, 255, 0.71);
}
.content {
    max-width: 350px;
}
@media (min-width: 576px) {
    
}
@media (min-width: 768px) {

}
@media (min-width: 992px) {

}
`

export default About