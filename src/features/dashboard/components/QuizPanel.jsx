import React from 'react'

const QuizPanel = ({data, userAnswers, setUserAnswers}) => {

    const currentAnswer = userAnswers.filter(item => item.question_id == data.id)[0]
    let chosen = currentAnswer?currentAnswer.user_answer: ''
    const { options } = data
    
    const selectAnswer = (event) => {
        setUserAnswers(prev => {
            const answers = prev.map(answer => {
                if (answer.question_id == data.id) {
                    return {
                        ...answer,
                        user_answer: event.target.value
                    }
                }
                return answer
            })
            return answers
        })
    }

  return (
    <div className='quiz-panel'>
        <p className='quiz-question'>{data.question}</p>
        <div className='quiz-options'>
            {
                options.map((option, id) => 
                <div className='quiz-option' key={ id }>
                    <input 
                        id={ id } 
                        type={'radio'} 
                        value={ option } 
                        name='quiz-option' 
                        checked={chosen === option} 
                        onChange={selectAnswer} 
                    />
                    <label htmlFor={ id } >{option}</label>
                </div>
                
                )
            }
        </div>
    </div>
  )
}

export default QuizPanel
