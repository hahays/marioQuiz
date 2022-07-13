import React, { useContext } from "react";
import QuestionList from "../../data/questions.json";
import QuizResult from "../QuizResult/QuizResult";
import Question from "../Question/Question";
import "./QuizScreen.css";
import { QuizContext } from "../QuizContex/QuizContex";
import MarioQuiz from "../MarioQuiz/MarioQuiz";

function QuizScreen({ retry }) {
  const {
    setMarkedAnswers,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    calculateResult,
    isQuestionEnd,
    resetQuiz,
  } = useContext(QuizContext);

  const onRetry = () => {
    resetQuiz();
    retry();
  };

  const qustion = QuestionList[currentQuestionIndex];

  return (
    <div className="quizScreen">
      {isQuestionEnd ? (
        <QuizResult result={calculateResult()} retry={onRetry} />
      ) : (
        <div>
          <MarioQuiz hint={qustion.hint} />
          <Question
            question={qustion}
            totalQuestions={QuestionList.length}
            currentQuestion={currentQuestionIndex + 1}
            setAnswer={(index) => {
              setMarkedAnswers((arr) => {
                let newArr = [...arr];
                newArr[currentQuestionIndex] = index;
                return newArr;
              });
              setCurrentQuestionIndex(currentQuestionIndex + 1);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default QuizScreen;
