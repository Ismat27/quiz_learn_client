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
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Token ${token}` },
      body: JSON.stringify({ answers: userAnswers, quiz_id })
    }
    fetch('http://127.0.0.1:8000/mark-quiz/', requestOptions)
        .then(response => {
          if (response.status >= 200 && response.status <=200) {
            return response.json()
          }
          else {
            throw Error(response.statusText)
          }
        })
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.log(error);
    });
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
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Token ${token}` },
    }
    fetch('http://127.0.0.1:8000/quiz-question/', requestOptions)
        .then(response => {
          if (response.status >= 200 && response.status <= 299) {
            return response.json()
          }
          else {
            throw Error(response.statusText);
          }
        })
        .then(data => {
          if (data) {
            const {questions, quiz_id} = data
            const tempAnswers = questions.map((question_data) => {
              return {
                question_id: question_data.id,
                user_answer: ''
              }
            })
            setUserAnswers(tempAnswers)
            setQuestions(questions)
            setQuiz_id(quiz_id)
          }
          else {
            setQuestions(prev => prev)
              console.log('error');
          }
        })
        .catch(error => {
          console.log(error);
    });
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