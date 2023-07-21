import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);
  const initialTime = 10;

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeRemaining((timeRemaining) => {
        if (timeRemaining === 0) {
          setTimeRemaining(initialTime);
          onAnswered(false);
        } else {
          return timeRemaining - 1;
      
        }
      });
    }, 1000);

    return () => clearTimeout(timer); // Cleanup function to clear the timeout
  }, [timeRemaining]);

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
