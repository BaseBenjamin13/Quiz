import React, { useState } from 'react';
import '../App.css';

import quizData from '../api/quizData';

function Quiz() {

    const [displayQuestion, setDisplayQuestion] = useState(0);
    const [displayAnswer, setDisplayAnswer] = useState(false);
    const [answerCorrect, setAnswerCorrect] = useState(false);
    const [amountCorrect, setAmountCorrect] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [result, setResult] = useState(0);

    const reset = () => {
        setDisplayQuestion(0);
        setDisplayAnswer(false);
        setAnswerCorrect(false);
        setAmountCorrect(0)
        setShowResults(false);
        setResult(0);
        
    }

    const handleNextBtn = () => {
        if (displayQuestion < quizData.questions.length - 1) {
            setDisplayQuestion(displayQuestion + 1)
            setDisplayAnswer(false);
            setAnswerCorrect(false);
            
        } else {
            setShowResults(true);
            setResult((amountCorrect / quizData.questions.length) * 100)
        }
    }
    const handleBackBtn = () => {
        if (displayQuestion >= 1) {
            setDisplayQuestion(displayQuestion - 1)
            setAnswerCorrect(false);
            setDisplayAnswer(false);
        }
    }

    const handleAnswer = (index) => {
        if (quizData.questions[displayQuestion].correctAnswerIndex == index) {
            console.log('%cCorrect', `background-color: green`);
            setDisplayAnswer(!displayAnswer);
            setAnswerCorrect(true);
            setAmountCorrect(amountCorrect + 1);
            
        } else {
            setDisplayAnswer(!displayAnswer);
            
            console.log('%cWrong', `background-color: red`)
        }
    }

    return (
        <div className='quiz-container'>
            <h2>JavaScript Quiz</h2>
            {
                !showResults ?
                    <>
                        <h2>Question (<span style={{ color: '#4cceac' }}>{displayQuestion + 1}</span>/{quizData.questions.length})</h2>

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
                                            <h3
                                                style={displayAnswer && quizData.questions[displayQuestion].correctAnswerIndex == index
                                                    ? { color: '#4cceac' }
                                                    : displayAnswer && quizData.questions[displayQuestion].correctAnswerIndex !== index
                                                        ? { color: '#db4f4a' }
                                                        : null
                                                }
                                            >
                                                {answer}
                                            </h3>
                                        </button>
                                    )
                                })
                            }
                        </div>

                        {displayAnswer && answerCorrect
                            ? <h1 style={{ color: '#4cceac' }}>Correct!</h1>
                            : displayAnswer && !answerCorrect &&
                            <h1 style={{ color: '#db4f4a' }}>Wrong</h1>

                        }

                        <div className='quiz-nav'>
                            <button onClick={handleBackBtn}>Prev</button>
                            <button onClick={handleNextBtn}>Next</button>
                        </div>
                    </>
                    
                    : 
                    <div className='results-container'>
                        <h1>Results</h1>
                        <div 
                            className='result-container' 
                            style={
                                result > 50 
                                ? {border: '3px solid #4cceac', boxShadow: '0 0 1rem #4cceac'}
                                : {border: '3px solid #db4f4a', boxShadow: '0 0 1rem #db4f4a'}
                            }
                        >
                            <h1 style={result > 50 ? {color: '#4cceac'}: {color: '#db4f4a'}}>
                                {result}%
                            </h1>
                        </div>
                        <button onClick={reset}
                        >
                            Try Again
                        </button>
                    </div>

            }
        </div>
    )
}

export default Quiz;