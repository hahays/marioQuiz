import React, { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import "./Question.css";

function Question({ question, totalQuestions, currentQuestion, setAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const timer = useRef(null);
  const progressBar = useRef(null);

  function goToNextQuestion() {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    flushSync(() => {
      setAnswer(selectedOption);
    });
    setSelectedOption(null);
  }

  useEffect(() => {
    progressBar.current.classList.remove("active");
    setTimeout(() => {
      progressBar.current.classList.add("active");
    }, 0);
    timer.current = setTimeout(goToNextQuestion, 100 * 1000); // 10 seconds
  }, [question]);
  return (
    <div className="quiz-container">
      <div className="question nes-container is-rounded  is-dark">
        <div
          className="progress-bar nes-progress is-primary"
          ref={progressBar}
        ></div>
        <div className="question-count">
          <b>{currentQuestion}</b> of <b>{totalQuestions}</b>
        </div>
        <div className="main">
          <div className="nes-container is-dark is-rounded">
            <div className="title">
              <span> Вопрос:</span>
              <p>{question.title}</p>
            </div>
          </div>

          <div className="options ">
            {question.options.map((option, index) => {
              return (
                <div
                  className={
                    index === selectedOption ? "option active " : "option"
                  }
                  key={index}
                  onClick={() => setSelectedOption(index)}
                >
                  {option}
                </div>
              );
            })}
          </div>
        </div>
        <div className="control">
          <button
            type="button"
            className="nes-btn is-error"
            onClick={goToNextQuestion}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Question;
