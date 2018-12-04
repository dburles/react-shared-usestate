import React from 'react'

/**
 * Creates a shared state container.
 * @kind function
 * @name createSharedUseState
 * @param {*} [initialState] An initial state.
 * @returns {function} A React hook.
 */
export const createSharedUseState = initialState => {
  let state = initialState
  const subscriptions = []

  // eslint-disable-next-line
  const set = newState => {
    state = typeof newState === 'function' ? newState(state) : newState
    subscriptions.forEach(cb => cb())
  }

  // eslint-disable-next-line
  const onUpdate = fn => {
    subscriptions.push(fn)
    return () => subscriptions.splice(subscriptions.indexOf(fn), 1)
  }

  return () => {
    const [, setState] = React.useState()
    React.useEffect(() => onUpdate(setState), [])

    return [state, set]
  }
}
