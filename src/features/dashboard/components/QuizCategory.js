import { quizCat } from "../data/quizData";
import React from 'react'
import styled from "styled-components";

const QuizCategory = ({startQuiz}) => {
  return (
    <Wrapper className="capitalize">
        <div>
            <h1>play and win big time.</h1>
            <p>test your knowledge with quiz and earn SQP points.</p>
        </div>
        <div role={'table'} className="quiz-cats">
            {
                quizCat.map((item, index) => {
                    return (
                        <article role={'row'} key={index}>
                            <span>{item.name}</span>
                            <div className="capitalize btn-box">
                                <button className="capitalize btn info">
                                    more info
                                </button>
                                <button  
                                    className="capitalize btn play"
                                    onClick={startQuiz}
                                >
                                    play now
                                </button>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding-block: 1rem 2rem;
p {
    font-weight: 600;
    color: rgba(0, 0, 0, 0.49);
    font-size: 18px;
    padding-block: 1rem 2rem;
}
article {
  display: grid;
  grid-template-columns:50% 50%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.62);
  padding-block: 1.2rem;
  span {
    font-weight: bold;
  } 
}
article:last-child {
  border: none;
}
.btn-box {
    display: flex;
    gap: 1rem;
}
button {
    font-weight: 600;
    padding: .3rem;
    border-radius: 10px;
    border: 2px solid var(--bg-blue);
    background-color: var(--white-color);
}
.play {
    color: var(--white-color);
    background-color: var(--bg-blue);
}
@media (min-width: 576px) {
    button {
    padding: .3rem .8rem;
    }
    article {
    grid-template-columns: 65% 35%;
    }
}
@media (min-width: 768px) {
    article {
        grid-template-columns: 70% 30%;
    }
}
@media (min-width: 992px) {
    padding-block: 8rem 2rem;
    article {
        grid-template-columns: 75% 25%;
    }
  
}
`

export default QuizCategory