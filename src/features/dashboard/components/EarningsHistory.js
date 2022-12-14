import React from 'react'
import styled from 'styled-components'

const EarningsHistory = ({data}) => {
  return (
    <Wrapper>
        <h2 className='capitalize'>earnings history</h2>
        <div role={'table'}>
          <article role={'row'} className='capitalize title'>
            <span className='index'>&nbsp;</span>
            <span className='task'>task</span>
            <span className='total-answered'>total answered</span>
            <span className='points'>points</span>
          </article>
          {
            data.map((record, index) => {
              return (
                <article role={'row'} className='earning capitalize' key={record.id}>
                  <span className='index'>{index + 1}</span>
                  <span className='task'>{record.category || 'general'}</span>
                  <span className='total-answered'>{15}</span>
                  <span className='points'>{record.score}pts</span>
                </article>
              )
            })
          }
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
h2 {
  margin-block: 4rem 1rem;
}
article {
  display: grid;
  grid-template-columns: 10% 40% 30% 20%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.62);
  padding-block: 1rem;
  span {
    font-weight: bold;
  } 
}
.total-answered, .points {
  text-align: center;
}

article:last-child {
  border: none;
}
@media (min-width: 576px) {
  article.title {
  span {
    font-size: 18px;
  }
}
}
@media (min-width: 768px) {
  article {
    grid-template-columns: 5% 45% 30% 20%;
  }
}
@media (min-width: 992px) {
  
}
`

export default EarningsHistory
