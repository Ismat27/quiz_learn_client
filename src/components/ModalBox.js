import styled from 'styled-components'

const ModalBox = ({children}) => {
  return (
    <Wrapper>
        {children}
    </Wrapper>
  )
}

const Wrapper = styled.section`
width: 100vw;
height: 100vh;
position: fixed;
top: 0;
left: 0;
background-color: var(--ash-color);
z-index: 2000;
display: grid;
place-items: center;
p {
    margin-bottom: 2rem;
}
`

export default ModalBox