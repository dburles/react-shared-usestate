import { useState, useEffect } from 'react';

const createGlobalUseState = initialState => {
  let state = initialState;
  const subscriptions = [];

  const set = newState => {
    state = typeof newState === 'function' ? newState(state) : newState;
    subscriptions.forEach(cb => cb());
  };

  const onUpdate = fn => {
    subscriptions.push(fn);
    return () => subscriptions.splice(subscriptions.indexOf(fn), 1);
  };

  return () => {
    const [, setState] = useState();
    useEffect(() => onUpdate(setState), [state]);

    return [state, set];
  };
};

export default createGlobalUseState;
