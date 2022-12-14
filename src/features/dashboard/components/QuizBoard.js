import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useGlobalContext } from '../../../app/AppContext'
import { useNavigate } from 'react-router-dom'

const QuizBoard = ({ endQuizMode }) => {

    const { token } = useGlobalContext()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [questions, setQuestions] = useState([])
    const [number, setNumber] = useState(0)
    const [userAnswers, setUserAnswers] = useState([])
    const [quiz_id, setQuiz_id] = useState('')
    const [currentAnswer, setCurrentAnswer] = useState('')

    const currentQuestion = questions[number]

    const navigate = useNavigate()

    function selectAnswer(id, option) {
        setUserAnswers(prev => {
            const answers = prev.map(item => {
                if (item.question_id === id) {
                    return {
                        ...item,
                        user_answer: option
                    }
                }
                return item
            })
            return answers
        })
        setCurrentAnswer(option)
    }

    function nextQuestion() {
        const lastNo = questions.length - 1
        let nextNo = number + 1
        if (nextNo > lastNo) {
            submitQuiz()
            return
        }
        else {
            setNumber(nextNo)
        }
    }

    const submitQuiz = () => {
        axios.post('http://127.0.0.1:8000/mark-quiz/', { answers: userAnswers, quiz_id }, {
          headers: { 'Content-Type': 'application/json', 'Authorization': `Token ${token}` }
        } )
        .then(response => {
          const {data} = response
          setQuestions([])
          setUserAnswers([])
          setNumber(0)
          setQuiz_id('')
          setError(false)
          setLoading(true)
          console.log(data);
        })
        .catch(error => {
          console.log(error);
        })
      }

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/quiz-question/', {
          headers: { Authorization : `Token ${token}` }
        })
        .then(response => {
          const { quiz_id, questions } = response.data
          const tempAnswers = questions.map((question_data) => {
            return {
              question_id: question_data.id,
              user_answer: ''
            }
          })
          setUserAnswers(tempAnswers)
          setQuestions(questions)
          setQuiz_id(quiz_id)
          setLoading(false)
          setError(false)
        })
        .catch(() => {
          setLoading(false)
          setError(true)
        })
    
      }, [token])

    function noQuiz() {
        endQuizMode()
        navigate('/dashboard')
    }

    if (error) {
        return (
          <div className='no-quiz'>
            <h1>No Quiz</h1>
            <p>Unable to start quiz. It may be that you have taken quiz, or network isuue.</p>
            <p>Contact the admin for enquiries</p>
            <button className='btn action-btn'
                onClick={noQuiz}
            >
                ok
            </button>
          </div>
        )
    }

    if (loading) {
        return (
            <h1>loading</h1>
        )
    }

    return (
        <Wrapper>
            <div className='capitalize center'>
                <h1>question {number + 1} - {questions.length}</h1>
                <p>note: choose your answer below and <br/>press continue once done.</p>
            </div>
            <div className='quiz-board'>
                <p className='quiz-element quiz-question'>
                    {currentQuestion.question}
                </p>
                <div className='quiz-options'>
                {
                    currentQuestion.options.map((option, index) => {
                        const {id} = currentQuestion
                        return (
                            <div 
                                key={index} 
                                className={`${option === currentAnswer? 'active quiz-element': 'quiz-element'}`}
                                onClick={() => selectAnswer(id, option)}
                            >
                                <p className='option' htmlFor='a'>
                                    {option}
                                </p>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <button className='btn'
                onClick={nextQuestion}
            >
                {number >= questions.length - 1? 'submit' : 'continue'}
            </button>
        </Wrapper>
    )
}

const Wrapper = styled.section`
.center {
    text-align: center;
    p {
        font-weight: 600;
        color: rgba(0, 0, 0, 0.49);
        font-size: 18px;
        padding-block: 1rem 2rem;
    }
}
.quiz-question {
    margin-bottom: 2rem;
    padding: .5rem;
}
.quiz-options {
    display: grid;
    grid-template-columns: 45% 45%;
    column-gap: 10%;
    row-gap: 2rem;
    grid-template-rows: auto;
    margin-bottom: 3rem;
}
.quiz-options > div {
    width: 100%;
}
div.active {
    background-color: var(--bg-blue);
    color: var(--white-color);
}
input {
    visibility: hidden;
    width: 0;
}
.quiz-element {
    background-color: #D9D9D9;
    border-radius: 10px;
    padding: 1rem;
}
button {
    display: block;
    width: 100%;
    padding: 1rem;
    background-color: var(--bg-blue);
    color: var(--white-color);
    border: none;
    border-radius: 10px;
    font-size: 20px;
}
`

export default QuizBoard