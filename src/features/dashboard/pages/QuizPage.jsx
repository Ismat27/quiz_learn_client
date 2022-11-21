import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import { Context } from '../../../app/AppContext'
import QuizPanel from '../components/QuizPanel'
const tempQuestions = [
  {
    question: '',
    options: []
  }
]

const answers = [
  {
    question_id: '',
    user_answer: ''
  }
]

const QuizPage = () => {
  const {token} = useContext(Context)
  const [questions, setQuestions] = useState(tempQuestions)
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState(answers)
  const [quiz_id, setQuiz_id] = useState('')

  const getNextQuestion = () => {
    setNumber(prev => {
      if (prev < questions.length - 1) {
        return prev + 1
      }
      else {
        return prev
      }
    })
  }

  const submitQuiz = (event) => {
    event.preventDefault()
    axios.post('http://127.0.0.1:8000/mark-quiz/', { answers: userAnswers, quiz_id }, {
      headers: { 'Content-Type': 'application/json', 'Authorization': `Token ${token}` }
    } )
    .then(response => {
      const {data} = response
      setQuestions([])
      setUserAnswers([])
      setNumber(0)
      setQuiz_id('')
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    })
  }

  const ActionButtons = () => {
    return (
      <>
        {
          number < questions.length - 1?
          <button onClick={() => getNextQuestion()} type='button'>next</button>:
          <button type='submit'>Submit</button>
        }
      </>
    )
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
    })
    .catch(error => {
      console.log(error);
    })

  }, [token])

  return (
    <div>
      <form onSubmit={submitQuiz} className='quiz-form'>
        {questions?
        <div>
          <h2>Question {number + 1} of {questions.length}</h2>
          <QuizPanel data={questions[number]} userAnswers={userAnswers} setUserAnswers={setUserAnswers}/>
          <ActionButtons/>
        </div>:
        <h2>Congrats, your score is</h2>
        }
      </form>
    </div>
  )
}

export default QuizPage