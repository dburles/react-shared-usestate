import React from 'react';

/**
 * @kind typedef
 * @name ReactUseStateHook
 * @type {function}
 * @returns {Array<ReactUseStateState, ReactUseStateSetter>}
 */

/**
 * The current state.
 * @kind typedef
 * @name ReactUseStateState
 * @type {*}
 */

/**
 * Call this function to update the state.
 * @kind typedef
 * @name ReactUseStateSetter
 * @type {string|function}
 * @param {*} newState A new state.
 */

/**
 * Creates a shared state container.
 * @kind function
 * @name createSharedUseState
 * @param {*} [initialState] An initial state.
 * @returns {ReactUseStateHook} A React hook.
 */
export const createSharedUseState = initialState => {
  let state = initialState;
  const subscriptions = [];

  /**
   * Sets state
   * @kind function
   * @name createSharedUseState~set
   * @param {*} newState A new state
   * @ignore
   */
  const set = newState => {
    state = typeof newState === 'function' ? newState(state) : newState;
    subscriptions.forEach(cb => cb());
  };

  /**
   * Subscribes a React component to state changes
   * @kind function
   * @name subscribe
   * @param {function} cb A callback function
   * @returns {function} Unsubscribes from state changes
   * @ignore
   */
  const subscribe = cb => {
    subscriptions.push(cb);
    return () => subscriptions.splice(subscriptions.indexOf(cb), 1);
  };

  return () => {
    const [, setState] = React.useState();
    React.useEffect(() => subscribe(setState), []);

    return [state, set];
  };
};
