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

  return (
    <div className='quiz-container'>
        <h2>JavaScript Quiz</h2>
        
        <div className='quiz-options'>
            {
                quizData.questions[displayQuestion].answers.map((answer) => {
                    return (
                        <div>
                            <h2>{answer}</h2>
                        </div>
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