import { useState } from "react";

export const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(initialState);
  };
  return {
    counter,

    const [state, setstate] = useState(initialState);

  const increment = (factor = 2) => {
    setstate(state + factor);
  };

  const decrement = (factor = 2) => {
    setstate(state - factor);
  };

  const reset = () => {
    setstate(initialState);
  };
  return {
    state,
    increment,
    decrement,
    reset,
  };
};
