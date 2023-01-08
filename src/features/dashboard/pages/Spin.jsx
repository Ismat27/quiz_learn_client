import styled from "styled-components"
import { useRef, useState } from "react";

const points = [
  5, 50, null, null, 100, null,
  null, 25, 
]
const degreeInterval = 360 / points.length
const skewAngle = points.length * 5

const Spin = () => {

  const circleRef = useRef(null);
  const [spinned, setSpinned] = useState(false)

  const spin = () => {
    let number = Math.random() * points.length
    number = Math.floor(number)
    const degree =  360 - (degreeInterval * number)
    console.log(degree, points[number]);
    circleRef.current.style.transform = `rotate(${degree + 1080}deg)`
    setSpinned(true)
  }

  return (
    <Wrapper>
      <div className="container">
        <article className="capitalize">
          <h1>spin and win</h1>
          <p className="bold p-grey">you can only spin once. check out our <br/> others reward page for more opportunities.</p>
        </article>
        <div className="outer-circle">
          <ul className="circle" ref={circleRef}>
            {
              points.map((point, index) => {
                const style = {transform: `rotate(${index * degreeInterval}deg) skewY(-${skewAngle}deg)`}
                const textStyle = {transform: `skewY(${skewAngle}deg) rotate(15deg)`}
                return (
                  <li key={index} style={style}>
                    <div style={textStyle} className="bold capitalize text">
                      {point? point : 'empty'}
                    </div>
                  </li>
                )
              })
            }
          </ul>
          <div className="pointer"></div>
          <button disabled={spinned} onClick={spin} className="spinner">spin</button>
        </div>
      </div>
  </Wrapper>
  )
}

const Wrapper = styled.section`
padding-top: 2.5rem;
.container {
  display: grid;
  place-items: center;
}
article {
  margin-bottom: 2rem;
  text-align: center;
}
.outer-circle {
  position: relative;
  background-color: black;
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
}
.pointer {
  width: 0; 
  height: 0; 
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 40px solid #ffffff;
  position: absolute;
  top: 0;
  left: 55%;
  transform: translateX(20px);
}

button {
  border: none;
  padding: .5rem 1rem;
  background-color: white;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  position: absolute;
  transform: translateX(-50%, -50%);
}

.circle {
  position: relative;
  padding: 0;
  margin: 1em auto;
  width: 18rem;
  height: 18rem;
  border-radius: 50%;
  list-style: none;
  overflow: hidden;
  transition: transform 2s ease;
}
li {
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 50%;
  transform-origin: 0% 100%;
}
.text {
  position: absolute;
  left: -100%;
  width: 200%;
  height: 200%;
  text-align: center;
  padding-top: 20px;
  padding-left: 20px;
  color: white;

}
li:first-child .text {
  background: #F7941D;
}
li:nth-child(2) .text {
  background: #2E3192;
}
li:nth-child(3) .text {
  background: #F7941D;
}
li:nth-child(4) .text {
  background: #34A853;
}
li:nth-child(5) .text {
  background: #ED1C24;
}
li:nth-child(6) .text {
  background: #34A853;
}
li:nth-child(7) .text {
  background: #ED1C24;
}
li:nth-child(8) .text {
  background: #2E3192;
}
@media (min-width: 576px) {
  .outer-circle {
    width: 400px;
    height: 400px;
  }
  .circle {
    width: 350px;
    height: 350px;
  }
}
@media (min-width: 768px) {
  .outer-circle {
    width: 450px;
    height: 450px;
  }
  .circle {
    width: 400px;
    height: 400px;
  }
}
@media (min-width: 992px) {
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 1.25rem;
  }
  .outer-circle {
    width: 500px;
    height: 500px;
  }
  .circle {
    width: 450px;
    height: 450px;
  }
}
`
export default Spin
