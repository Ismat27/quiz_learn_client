import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { coursesInfo } from '../data/coursesInfo'
const Card = ({course_title, course_desc, number}) => {

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
                <h3 className='bold course-name'>
                    <span>{number}.</span>
                    <span>{course_title}</span>
                </h3>
                <button className='toggler' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen? '-': '+'}
                </button>
            </div>
            <div ref={containerRef} className='answer-box'>
                <p ref={answerRef} className='course-desc'>{course_desc}</p>
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
            {
                coursesInfo.map((item, index) => {
                    return (
                        <Card key={item.id} number={index + 1} {...item} />
                    )
                })
            }
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding-top: 3.5rem;
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
    font-weight: 600;
}
.c-top, .course-name {
    display: flex;
    align-items: flex-start;
    gap: .5rem;
}
.c-top {
    justify-content: space-between;
}
.course-name {
    font-weight: 600;
}
.answer-box {
    height: 0;
    overflow: hidden;
    color: rgba(255, 255, 255, 0.46);
    p {
        padding-top: 1rem;
    }
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