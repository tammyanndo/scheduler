import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace) {
    if (replace) {
      history[history.length - 1] = newMode
    } else {
      history.push(newMode)
    }
    setHistory(history)
    setMode(newMode)
  }


  function back() {
    if (history.length > 1) {
      history.pop();
      setHistory(history)
      setMode(history[history.length - 1])
    }
  }

  return { transition, mode, back };
}


