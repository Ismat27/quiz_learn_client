import styled from "styled-components"
import { useRef, useState } from "react";

const points = [
  5, 50, null, null, 100, null,
  null, 25, 
]

const Spin = () => {

  const circleRef = useRef(null);
  const [spinned, setSpinned] = useState(false)

  const spin = () => {
    let number = Math.random() * points.length
    number = Math.floor(number)
    const degree =  360 - (45 * number)
    console.log(degree, points[number]);
    circleRef.current.style.transform = `rotate(${degree + 1080}deg)`
    setSpinned(true)
  }

  return (
    <Wrapper>
      <div className="container">
        <div className="outer-circle">
          <ul className="circle" ref={circleRef}>
            {
              points.map((point, index) => {
                return (
                  <li key={index}>
                    <div className="bold capitalize text">
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
.container {
  display: grid;
  place-items: center;
  height: 100vh;
}
.outer-circle {
  position: relative;
  background-color: black;
  width: 22em;
  height: 22em;
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
  transform: skewY(20deg);
}

button {
  border: none;
  padding: .5rem 1rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  font-size: 1rem;
  cursor: pointer;
  position: absolute;
  transform: translateX(-50%, -50%);
}

.circle {
  position: relative;
  padding: 0;
  margin: 1em auto;
  width: 20em;
  height: 20em;
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
  transform: skewY(40deg) rotate(15deg);
  padding-top: 20px;
  padding-left: 20px;
  color: white;

}
li:first-child {
  transform: rotate(0deg) skewY(-40deg);
}
li:nth-child(2) {
  transform: rotate(45deg) skewY(-40deg);
}
li:nth-child(3) {
  transform: rotate(90deg) skewY(-40deg);
}
li:nth-child(4) {
  transform: rotate(135deg) skewY(-40deg);
}
li:nth-child(5) {
  transform: rotate(180deg) skewY(-40deg);
}
li:nth-child(6) {
  transform: rotate(225deg) skewY(-40deg);
}
li:nth-child(7) {
  transform: rotate(270deg) skewY(-40deg);
}
li:nth-child(8) {
  transform: rotate(315deg) skewY(-40deg);
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
`
export default Spin
