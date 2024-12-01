import React, { useEffect, useCallback } from "react";
import "./App.css";
import {
  playC4,
  playDb4,
  playD4,
  playEb4,
  playE4,
  playF4,
  playGb4,
  playG4,
  playAb4,
  playA4,
  playBb4,
  playB4,
  playC5,
  playNote,
} from "./tone.fn.js";

function App() {
  const keyMap = {
    65: "C4",
    87: "Db4",
    83: "D4",
    69: "Eb4",
    68: "E4",
    70: "F4",
    84: "Gb4",
    71: "G4",
    89: "Ab4",
    72: "A4",
    85: "Bb4",
    74: "B4",
    75: "C5",
  };

  const handleKeyDown = useCallback((event) => {
    const key = document.querySelector(`[data-note="${keyMap[event.keyCode]}"]`);
    if (key) {
      key.classList.add("active");
      playNote(event);
    }
  }, []);

  const handleKeyUp = useCallback((event) => {
    const key = document.querySelector(`[data-note="${keyMap[event.keyCode]}"]`);
    if (key) {
      key.classList.remove("active");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return (
    <div className="pianoPage">
      <h1>Piano</h1>
      <div className="piano">
        <div className="white-key" onClick={playC4} data-note="C4">A</div>
        <div className="black-key" onClick={playDb4} data-note="Db4">W</div>
        <div className="white-key" onClick={playD4} data-note="D4">S</div>
        <div className="black-key" onClick={playEb4} data-note="Eb4">E</div>
        <div className="white-key" onClick={playE4} data-note="E4">D</div>
        <div className="white-key" onClick={playF4} data-note="F4">F</div>
        <div className="black-key" onClick={playGb4} data-note="Gb4">T</div>
        <div className="white-key" onClick={playG4} data-note="G4">G</div>
        <div className="black-key" onClick={playAb4} data-note="Ab4">Y</div>
        <div className="white-key" onClick={playA4} data-note="A4">H</div>
        <div className="black-key" onClick={playBb4} data-note="Bb4">U</div>
        <div className="white-key" onClick={playB4} data-note="B4">J</div>
        <div className="white-key" onClick={playC5} data-note="C5">K</div>
      </div>
    </div>
  );
}

export default App;

