import React, { useState, useEffect } from "react";
import Title from "./Title";
import Book from "./Book";
import Answer from "./Answer";
import NextAnswer from "./NextAnswer";
import FadeLoader from "react-spinners/FadeLoader";

function App() {
  const [isClicked, setClick] = useState(false);
  const [loading, setLoading] = useState(false);

  function getAnswer() {
    setClick(true);
  }

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Title />
      {isClicked ? (
        loading ? (
          <div className="loader">
            <FadeLoader color={"#73777B"} speedMultiplier={2} />
            <p>Thinking...</p>
          </div>
        ) : (
          <div>
            <Answer />
            <NextAnswer />
          </div>
        )
      ) : (
        <Book onClick={getAnswer} />
      )}
    </>
  );
}

export default App;
