import React, { useContext } from "react";
import { QuizContext } from "../QuizContex/QuizContex";
import Navbar from "../Navbar/Navbar";
import QuizScreen from "../QuizScreen/QuizScreen";
import JoinScreen from "../JoinScreen/JoinScreen";
import HeaderStart from "../Header/HeaderStart";
import "./Quiz.css";

function Quiz() {
  const { isQuizStarted, setIsQuizStarted, renderHeader, calculateResult } =
    useContext(QuizContext);
  const { isGameWon } = calculateResult();

  return (
    <div>
      {isQuizStarted ? (
        <div className="retry">
          <Navbar header={renderHeader(isGameWon)} />
          <QuizScreen retry={() => setIsQuizStarted(false)} />
        </div>
      ) : (
        <div className="marioQuiz">
          <Navbar className="logo" header={<HeaderStart />} />
          <JoinScreen start={() => setIsQuizStarted(true)} />
        </div>
      )}
    </div>
  );
}

export default Quiz;
