import React from "react";

import "./ButtonStart.css";

const text = `Привет, дорогой друг! Нам нужна твоя помощь. Принцессу Питч похитили и единственный способ узнать где она - откыть этот сундук! Необходимо ответить на 9 из 10 возможных
вопросов. Марио будет подсказывать тебе. Удачи! `;

// const text = `Hi, friend! Help Mario open the chest and get a clue about the location of the Princess!
// You need to answer all 10 questions. Good luck!

// P.S. Not the fact that there is a hint in the chest. . .`;

function ButtonStart() {
  return (
    <section className="buttonStart">
      <button
        type="button"
        className="nes-btn is-primary lng-button"
        onClick={() => {
          document.getElementById("dialog-default").showModal();
        }}
      >
        ОБ ИГРЕ
      </button>
      <dialog className="nes-dialog is-rounded" id="dialog-default">
        <form className="formButton" method="dialog">
          <p class="title">{text}</p>
          <menu className="dialog-menu button-dialog-menu">
            <button className="nes-btn is-primary">Закрыть</button>
          </menu>
        </form>
      </dialog>
    </section>
  );
}

export default ButtonStart;
