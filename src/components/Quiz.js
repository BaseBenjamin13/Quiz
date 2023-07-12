import React, { useState } from 'react';
import '../App.css';

import quizData from '../api/quizData';

function Quiz() {

    const [usersAnswer, setUsersAnswer] = useState('');
    const [displayQuestion, setDisplayQuestion] = useState(0);

    const handleNextBtn = () => {
        if(displayQuestion < quizData.questions.length -1){
            setDisplayQuestion(displayQuestion + 1)
        }
    }
    const handleBackBtn = () => {
        if(displayQuestion >= 1){
            setDisplayQuestion(displayQuestion - 1)
        }
    }

    const handleAnswer = (index) => {
        if(quizData.questions[displayQuestion].correctAnswerIndex == index){
            console.log('%cCorrect', `background-color: green`)
        } else {
            console.log('%cWrong', `background-color: red`)
        }
    }

  return (
    <div className='quiz-container'>
        <h2>JavaScript Quiz</h2>
        
        <div className='quiz-options'>
            <h2 className='question' dangerouslySetInnerHTML={{ __html: quizData.questions[displayQuestion].question }}></h2>
            {
                quizData.questions[displayQuestion].answers.map((answer, index) => {
                    return (
                        <button 
                            key={index} 
                            className='quiz-option-container' 
                            onClick={() => handleAnswer(index)}
                        >
                            <h3>{answer}</h3>
                        </button>
                    )
                })
            }
        </div>

        <div className='quiz-nav'>
            <button onClick={handleBackBtn}>Prev</button>
            <button onClick={handleNextBtn}>Next</button>
        </div>
    </div>
  )
}

export default Quiz;