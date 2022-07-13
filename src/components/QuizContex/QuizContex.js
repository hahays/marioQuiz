import React, { useState, createContext } from "react";
import QuestionList from "../../data/questions.json";
import HeaderGameOver from "../Header/HeaderGameOver";
import HeaderWin from "../Header/HeaderWin";

export const QuizContext = createContext();

export const QuizContexProvider = (props) => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentHint, setCurrentHint] = useState(0);
  const [markedAnswers, setMarkedAnswers] = useState(
    new Array(QuestionList.length)
  );
  const isQuestionEnd = currentQuestionIndex === QuestionList.length;

  const renderHeader = (isGameWon) => {
    if (!isQuestionEnd) {
      return;
    }

    if (isGameWon) {
      return <HeaderWin />;
    }

    return <HeaderGameOver />;
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
  };

  function calculateResult() {
    let currect = 0;

    QuestionList.forEach((question, index) => {
      if (question.currectOptionIndex == markedAnswers[index]) {
        currect++;
      }
    });

    return {
      total: QuestionList.length,
      currect: currect,
      isGameWon: currect >= 9,
    };
  }

  return (
    <QuizContext.Provider
      value={{
        currentQuestionIndex,
        currentHint,
        renderHeader,
        setCurrentHint,
        setCurrentQuestionIndex,
        isQuizStarted,
        setIsQuizStarted,
        resetQuiz,
        isQuestionEnd,
        calculateResult,
        setMarkedAnswers,
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
};
