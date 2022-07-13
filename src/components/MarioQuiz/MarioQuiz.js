import React from "react";
import MarioHeader from "../MarioHeader/MarioHeader";
import Typewriter from "typewriter-effect";

import "./MarioQuiz.css";

function MarioQuiz({ hint }) {
  return (
    <div className="main-mario-quiz">
      <div className="nes-balloon from-left window is-dark quiz-balloon ">
        <p>
          <Typewriter
            key={hint}
            onInit={(typewriter) => {
              typewriter.typeString(hint).start();
            }}
          />
        </p>
      </div>
      <div className="quizMario">
        <MarioHeader />
      </div>
    </div>
  );
}

export default MarioQuiz;
