import React from "react";

function NextAnswer() {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="answer">
      <p onClick={refreshPage}>Get Next Answer > ></p>
    </div>
  );
}

export default NextAnswer;
