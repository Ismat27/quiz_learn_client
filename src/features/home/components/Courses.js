import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const Card = ({question, answer}) => {

    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef()
    const answerRef = useRef()

    useEffect(() => {
        const answerHeight = answerRef.current.getBoundingClientRect().height;
        if (isOpen) {
            containerRef.current.style.height = `${answerHeight}px`
        }
        else {
            containerRef.current.style.height =0;
        }
    }, [isOpen])

    return (
        <article className='capitalize course-info'>
            <div className='c-top'>
                <h3 className='course-name'>{question}</h3>
                <button className='toggler' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen? '-': '+'}
                </button>
            </div>
            <div ref={containerRef} className='answer-box'>
                <p ref={answerRef} className='course-desc'>{answer}</p>
            </div>
        </article>
    )
}

const Courses = () => {
  return (
    <Wrapper>
        <div className='home-page'>
            <div className="capitalize h-box">
                <h2>available courses</h2>
            </div>
            <div className='courses-box'>
                <Card 
                    question={'what is ui/ux'}
                    answer={'answer to the question asked'}
                />
                <Card 
                    question={'what is frontend development'}
                    answer={'answer to the question asked'}
                />
                <Card 
                    question={'what is backend development'}
                    answer={'answer to the question asked'}
                />
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding-top: 2rem;
width: 90%;
margin: auto;
max-width: 800px;
.courses-box {
    display: grid;
    row-gap: 2rem;
}
.course-info {
    background-color: var(--bg-blue);
    padding: 1rem;
    border-radius: 5px;
    color: #ffffff;
}
.c-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: .5rem;
}
.answer-box {
    height: 0;
    overflow: hidden;
    transition: all 200ms;
}
.toggler {
    background-color: white;
    color: var(--bg-blue);
    min-width: 24px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1rem;
    border: none;
}
@media (min-width: 576px) {
    .courses-box {
        display: grid;
        grid-template-columns: repeat(2, 250px);
        justify-content: center;
        justify-content: space-between;
        align-items: start;
        row-gap: 1rem;
    }
}
@media (min-width: 768px) {
    .courses-box {
        grid-template-columns: repeat(2, 300px);
        
    }
}
@media (min-width: 992px) {
    .courses-box {
        grid-template-columns: repeat(2, 350px);
        
    }
}
`

export default Courses