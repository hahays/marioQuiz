import React from "react";
import "./MariosSpeech.css";
import Typewriter from "typewriter-effect";

function MariosSpeech() {
  return (
    <div className="nes-balloon from-left window is-dark speechStart ">
      <p>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Привет!")
              .pauseFor(2000)
              .typeString(" Это я . . . ")
              .pauseFor(2000)
              .typeString(`МАРИО!`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`Можешь помочь открыть этот сундук?`)
              .pauseFor(2500)
              .deleteAll()
              .typeString("Там карта. Она поможет отыскать принцессу Питч!")
              .pauseFor(2500)
              .deleteAll()
              .typeString("И золото. Его можешь забрать себе.")
              .pauseFor(2500)
              .deleteAll()
              .typeString("Если согласен помочь, нажми НАЧАТЬ")
              .start();
            // .typeString("Hello!")
            // .pauseFor(2000)
            // .typeString("It is me. . . ")
            // .pauseFor(2000)
            // .typeString(`MARIO!`)
            // .pauseFor(2000)
            // .deleteAll()
            // .typeString(`Can you help me open this chest?`)
            // .pauseFor(2500)
            // .deleteAll()
            // .typeString(
            //   "There is a map. She will help us to find Princess Pitch!"
            // )
            // .pauseFor(2500)
            // .deleteAll()
            // .typeString("And gold. You can take it for yourself.")
            // .pauseFor(2500)
            // .deleteAll()
            // .typeString("If you agree to help, please - press START")
            // .start();
          }}
        />
      </p>
    </div>
  );
}

export default MariosSpeech;
