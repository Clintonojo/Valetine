import { useState } from "react";
import "./App.css";

const phrases = [
  "no",
  "are you sure Jules ??",
  "mayber think again Im the best for u...",
  "pleaseeeeeeeeeeee?",
  "cmon bae be fr u love me",
  "you're being silly very silly",
  "reconsider my tizzy queen?",
  "ugh still no cmonnn???",
  "is that your final answer pookie?",
];
function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="kittycat"
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjd1cWN2MXJnbDlwbjZsdWVzOTN2OWc2Nmh6NHJ5NG5xYzIwbzBubCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sNPeJFq6YNEvLZdcqX/giphy.gif"
          />
          <div className="text">
            YAYYY I love you see u Thursday afternoon !
          </div>
        </>
      ) : (
        <>
          <img
            alt="kittycat2"
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHZ4bWh6azMwcHRtdGwycGMyeDB0bGRhdHhscjhoOGl5MW03Z2hxZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QAn6JoVuABBEapYyX2/giphy.gif"
          />
          <div>Jules- will you be my valentine ?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              YES
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
