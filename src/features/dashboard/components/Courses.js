import React from 'react'
import styled from 'styled-components'

const Courses = ({data}) => {
  return (
    <Wrapper>
        <div className='capitalize section-header'>
            <h2>{data.category}</h2>
            <strong role={'button'}>see all...</strong>
        </div>
        <div className='capitalize course-list'>
            {
                data.courses.map((course) => {
                    return (
                        <article key={course.id} className='course'>
                            <img src={course.image} alt={course.name} />
                            <div className='course-info'>
                                <h3 className='course-name'>{course.name}</h3>
                                <h3 className='course-price'>#{course.price}</h3>
                            </div>
                            <div className='btns'>
                                <button className='btn action-btn'>{course.sqp || 250}SQP</button>
                                <button className='btn action-btn2'>error now</button>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}
article {
    text-align: center;
}
img {
    max-width: 100%;
}
.btns {
    display: flex;
    justify-content: center;
    gap: 1rem;
}
button {
    min-width: unset;
    padding: 1rem;
    border: 2px solid var(--bg-blue);
}
.course-list {
    display: grid;
    row-gap: 2rem;
    margin-bottom: 2rem;
}
.course-info {
    margin-block: 1rem;
}
@media (min-width: 576px) {
    .course-list {
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-template-columns: 50% 50%;
        column-gap: 10px;
    }
    
}
@media (min-width: 768px) {
    .course-list {
        margin-bottom: 4rem;
        grid-template-columns: repeat(3, auto);
        column-gap: 1rem;
    }

}
@media (min-width: 992px) {
    .course-list {
        grid-template-columns: repeat(4, auto);
        column-gap: 1.5rem;
    }

}
`

export default Courses