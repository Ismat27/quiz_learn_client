import React, { useState } from 'react'
import QuizBoard from '../components/QuizBoard'
import QuizCategory from '../components/QuizCategory'

const PlayAndWin = () => {

    const [quizMode, setQuizMode] = useState(false)
    
    function startQuiz() {
        setQuizMode(true)
    }
    function stopQuiz() {
        setQuizMode(false)
    }

  return (
    <>
    {
        quizMode?
        <QuizBoard 
            endQuizMode={stopQuiz}
        />:
        <QuizCategory 
            startQuiz={startQuiz}
        />
    }
        
    </>
  )
}

export default PlayAndWin