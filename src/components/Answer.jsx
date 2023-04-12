import React from "react";
import answers from "./answers";

function Answer() {
  const arrIndex = answers.length - 1;
  const randomIndex = Math.floor(Math.random() * arrIndex);

  return (
    <div className="answer">
      <h1>{answers[randomIndex].answer}</h1>
    </div>
  );
}

export default Answer;
