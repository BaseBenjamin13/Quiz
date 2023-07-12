import React, { useState } from 'react';
import '../App.css';

import quizData from '../api/quizData';

function Quiz() {

    const [usersAnswer, setUsersAnswer] = useState('');
    const [displayQuestion, setDisplayQuestion] = useState(0);

  return (
    <div className='quiz-container'>
        <h2>JavaScript Quiz</h2>
        
        <div className='quiz-nav'>
            <button>Prev</button>
            <button>Next</button>
        </div>
    </div>
  )
}

export default Quiz;