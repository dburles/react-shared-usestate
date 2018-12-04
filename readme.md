# react-shared-usestate

[![npm version](https://badgen.net/npm/v/react-shared-usestate)](https://npm.im/react-shared-usestate) [![Build status](https://travis-ci.org/dburles/react-shared-usestate.svg?branch=master)](https://travis-ci.org/dburles/react-shared-usestate)

A micro libary for creating [React useState hooks](https://reactjs.org/docs/hooks-state.html) where their state is shared across many components.

Demo: <https://codesandbox.io/s/py5yzmy9jm>

## Setup

To install from [npm](https://npmjs.com/) run:

    npm install react-shared-usestate

## Usage

1. Create a shared state container, with an initial state of 0:

   ```js
   import { createSharedUseState } from 'react-shared-usestate';

   // The recommended naming convention is useXState, i.e. useCounterState:
   export const useCounterState = createSharedUseState(0);
   ```

2. Now you can use your shared state hook almost exactly as you would a regular useState hook (minus the initial state, since we set that earlier):

   ```js
   import { useCounterState } from './state';

   const Counter = props => {
     const [count, setCount] = useCounterState();
     // setCount has the same API as a normal useState hook.
     return <button onClick={() => setCount(count + 1)}>{count}</button>;
   };
   ```

## API

### Table of contents

- [function createSharedUseState](#function-createsharedusestate)
- [type ReactUseStateHook](#type-reactusestatehook)
- [type ReactUseStateSetter](#type-reactusestatesetter)
- [type ReactUseStateSetterCallback](#type-reactusestatesettercallback)
  - [Examples](#examples)
- [type ReactUseStateState](#type-reactusestatestate)

### function createSharedUseState

Creates a shared state container.

| Parameter      | Type | Description       |
| :------------- | :--- | :---------------- |
| `initialState` | \*?  | An initial state. |

**Returns:** [ReactUseStateHook](#type-reactusestatehook) — A React hook.

### type ReactUseStateHook

**Type:** [function](https://mdn.io/function)

**Returns:** [Array](https://mdn.io/array)&lt;[ReactUseStateState](#type-reactusestatestate), [ReactUseStateSetter](#type-reactusestatesetter)>

### type ReactUseStateSetter

Call this function to update the state.

**Type:** [function](https://mdn.io/function)

| Parameter  | Type                                                                   | Description  |
| :--------- | :--------------------------------------------------------------------- | :----------- |
| `newState` | [ReactUseStateSetterCallback](#type-reactusestatesettercallback) \| \* | A new state. |

### type ReactUseStateSetterCallback

Optional function state updater.

**Type:** [function](https://mdn.io/function)

| Parameter  | Type                                | Description  |
| :--------- | :---------------------------------- | :----------- |
| `newState` | [function](https://mdn.io/function) | A new state. |

**Returns:** \*

#### Examples

_Calling setState with state updater function._

> ```js
> setState(prevState => ({ ...state, ...updatedValues }));
> ```

### type ReactUseStateState

The current state.

**Type:** \*
