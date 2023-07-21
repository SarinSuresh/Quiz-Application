import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from "react";
import './Home.css';



function Home() {
  const location = useLocation()
  var Questionbank = [

    {
      Question: "React is a ?",
      AnswerText: [
        { Answer: "Library", isCorrect: true },
        { Answer: "Framework", isCorrect: false },
        { Answer: "Component", isCorrect: false },
        { Answer: "Back-end", isCorrect: false }
      ]
    },
    {
      Question: "What is Angular ?",
      AnswerText: [
        { Answer: "Library", isCorrect: false },
        { Answer: "Framework", isCorrect: true },
        { Answer: "Component", isCorrect: false },
        { Answer: "Back-end", isCorrect: false }
      ]
    },
    {
      Question: "Which of the following is used in react to increase performance ?",
      AnswerText: [
        { Answer: "Virtual DOM", isCorrect: true },
        { Answer: "Original DOM", isCorrect: false },
        { Answer: "A & B", isCorrect: false },
        { Answer: "None of the above", isCorrect: false }
      ]
    },
    {
      Question: "n which language is React.js written ?",
      AnswerText: [
        { Answer: "Phyton", isCorrect: true },
        { Answer: "Java", isCorrect: false },
        { Answer: "Javascript", isCorrect: false },
        { Answer: "PHP", isCorrect: false }
      ]
    },
    {
      Question: "What is React JS ?",
      AnswerText: [
        { Answer: "Server-side framework ", isCorrect: false },
        { Answer: "User interface Framework", isCorrect: true },
        { Answer: "Both A & B", isCorrect: false },
        { Answer: "None of the above", isCorrect: false }
      ]
    },
    {
      Question: "identify the one which is used to pass data to components from outside ?",
      AnswerText: [
        { Answer: "Render with arguments", isCorrect: true },
        { Answer: "setState", isCorrect: false },
        { Answer: "PropTypes", isCorrect: false },
        { Answer: "props", isCorrect: true }
      ]
    },
    {
      Question: "Who created React.js ?",
      AnswerText: [
        { Answer: "Jordan Mike", isCorrect: true },
        { Answer: "Jordan Walke", isCorrect: false },
        { Answer: "Tim Lee", isCorrect: false },
        { Answer: "Jordan Lee", isCorrect: false }
      ]
    },
    {
      Question: "How many elements can a valid react component return ?",
      AnswerText: [
        { Answer: "1", isCorrect: true },
        { Answer: "2", isCorrect: false },
        { Answer: "3", isCorrect: false },
        { Answer: "4", isCorrect: true }
      ]
    },
    {
      Question: "A state in React.js is also known as ?",
      AnswerText: [
        { Answer: "External storage of the component", isCorrect: false },
        { Answer: "Internal Storage of the component", isCorrect: true },
        { Answer: "Permanent Storage", isCorrect: false },
        { Answer: "All of the Above", isCorrect: true }
      ]
    },
    {
      Question: "Which of the following method is used to access the state of a component from inside of a member function ?",
      AnswerText: [
        { Answer: "this prototype.stateVAlue", isCorrect: false },
        { Answer: "this,getstate()", isCorrect: false },
        { Answer: "this,values", isCorrect: true },
        { Answer: "this.state", isCorrect: true }
      ]
    },
    {
      Question: "What are arbitrary inputs of components in react also known as?",
      AnswerText: [
        { Answer: "Element", isCorrect: false },
        { Answer: "props", isCorrect: true },
        { Answer: "key", isCorrect: false },
        { Answer: "Ref", isCorrect: true }
      ]
    },
    {
      Question: "Among the following, on which architectural pattern is AngularJS based ?",
      AnswerText: [
        { Answer: "[expression]", isCorrect: false },
        { Answer: "{expression}", isCorrect: false },
        { Answer: "{{expression}}", isCorrect: true },
        { Answer: "{{{expresions}}}", isCorrect: true }
      ]
    },
    {
      Question: "Choose the reactor which is used to bind the application data to the HTML view in AngularJS ?",
      AnswerText: [
        { Answer: "ng-bind directive", isCorrect: true },
        { Answer: "ng-model directive", isCorrect: false },
        { Answer: "ng-init directive", isCorrect: false },
        { Answer: "ng-app directive", isCorrect: true }
      ]
    },
    {
      Question: "Choose the incorrect AngularJS filter ?",
      AnswerText: [
        { Answer: "Oderby", isCorrect: false },
        { Answer: "email", isCorrect: true },
        { Answer: "currency", isCorrect: false },
        { Answer: "lowercase", isCorrect: true }
      ]
    },
    {
      Question: "Module created by using AngularJS function is known as ?",
      AnswerText: [
        { Answer: "mod()", isCorrect: true },
        { Answer: "module()", isCorrect: false },
        { Answer: "Angular module()", isCorrect: false },
        { Answer: "mdl()", isCorrect: true }
      ]
    },

  ]

  console.log(Questionbank);

  //useState hook
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerResponse = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questionbank.length) {
      setCurrentQuestion(nextQuestion);
    }
    else {
      setShowScore(true);
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  }

  return (
    <div>
      <h1 id='head1' >Hello! <span>{location.state.id}</span>, Welcome to the Quiz Section</h1>

      <div className='app'>

        {showScore ? (
          <div className='score-section'>
            You have scored {score} out of {Questionbank.length} &nbsp;
            <>
              <button id='playagain' type="submit" onClick={resetQuiz}>Play Again!!</button>
            </>
          </div>
        )
          : (
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>{currentQuestion + 1}</span>/{Questionbank.length}
                </div>

                <div className='question-text'>
                  {Questionbank[currentQuestion].Question}
                </div>
              </div>

              <div className='answer-section'>
                {Questionbank[currentQuestion].AnswerText.map((answer) =>
                (
                  <button onClick={() => handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                ))}
              </div>
            </>
          )
        }

      </div>
    </div>
  );
}

export default Home