import React from "react";
import ButtonStart from "../ButtonStart/ButtonStart";
import MarioHeader from "../MarioHeader/MarioHeader";
import MariosSpeech from "../MariosSpeech/MariosSpeech";
import "./JoinScreen.css";

function JoinScreen({ start }) {
  return (
    <div className="quiz-container">
      <div className="join-screen nes-container is-rounded is-dark">
        <MariosSpeech />
        <MarioHeader />
        <div className="control">
          <ButtonStart />
          <button className="nes-btn is-success" onClick={start}>
            НАЧАТЬ
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoinScreen;
