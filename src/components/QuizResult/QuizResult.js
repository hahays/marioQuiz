import React from "react";
import Chest from "../Chest/Chest";
import "./QuizResult.css";
import CHEST8 from "../../assets/chests/chest8.png";
import MAP from "../../assets/chests/map.png";

function QuizResult({ result, retry }) {
  return (
    <div className="quiz-container">
      <div className="result-screen nes-container is-rounded is-dark">
        {result.currect >= 9 ? (
          <div>
            <h2>
              ПОЗДРАВЛЯЮ! Ты большой фанат МАРИО! Дал правильный ответ на{" "}
              <b className="numberColor">{result.currect}</b> из{" "}
              <b className="numberColor">{result.total}</b> возможных вопросов и
              открыл сундук! Спасибо тебе, до новых встреч!
              {/* CONGRATZ! You are a big fan on Mario univercity!Unfortunately, you
              answered <b className="numberColor">{result.currect}</b> out of a
              possible <b className="numberColor">{result.total}</b> questions
              and could opened the chest! */}
            </h2>
            <div className="control winControl">
              <h3>Марио ушел спасать принцессу Питч</h3>
              <Chest src={MAP} className="chestResult" />
              <button className="nes-btn is-primary" onClick={retry}>
                ПОВТОРИТЬ
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2>
              К сожалению, тебе не удалось открыть сундук и помочь Марио спасти
              принцессу. Ты ответил на
              <b className="numberColor">
                {" "}
                {""} {result.currect}
              </b>{" "}
              из <b className="numberColor">{result.total}</b> {""} вопрсоов.
              Вместо того, чтобы забрать карту и спасти принцессу, Марио забрал
              всё золото и ушёл. Может, попробуешь еще раз ?
              {/* Unfortunately, you answered{" "}
              <b className="numberColor">{result.currect}</b> out of a possible{" "}
              <b className="numberColor">{result.total}</b> questions and could
              not open the chest. Mario took the gold and left.If you answer all
              the questions, then we can pick up a clue about the location of
              the Princess. You can try again! */}
            </h2>
            <div className="control loseControl">
              <h3>Марио забрал золото и ушел</h3>
              <Chest src={CHEST8} className="chestResult" />
              <button className="nes-btn is-primary" onClick={retry}>
                ПОВТОРИТЬ
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizResult;
