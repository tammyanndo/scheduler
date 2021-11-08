import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // sets the new mode when transition happens
  function transition(newMode, replace) {
    if (replace) {
      history[history.length - 1] = newMode
    } else {
      history.push(newMode)
    }
    setHistory(history);
    setMode(newMode);
  }
  // when the the mode is "confirm" or "error", mode should not be stored in [history] 
  function back() {
    if (history.length > 1) {
      history.pop();
      setHistory(history);
      setMode(history[history.length - 1]);
    };
  };
  return { transition, mode, back };
}


