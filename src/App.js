import React from "react";
import Footer from "./components/Footer/Footer";
import { QuizContexProvider } from "../src/components/QuizContex/QuizContex";
import Quiz from "./components/Quiz/Quiz";

import "./App.css";

function App() {
  return (
    <QuizContexProvider>
      <div className="app">
        <div className="is-dark main">
          <Quiz />
        </div>
        <Footer />
      </div>
    </QuizContexProvider>
  );
}

export default App;
