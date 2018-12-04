# react-shared-usestate

[![npm version](https://badgen.net/npm/v/react-shared-usestate)](https://npm.im/react-shared-usestate) [![Build status](https://travis-ci.org/dburles/react-shared-usestate.svg?branch=master)](https://travis-ci.org/dburles/react-shared-usestate)

Micro libary for creating global React useState hooks.

Demo: <https://codesandbox.io/s/py5yzmy9jm>

### Usage

1. Create a shared state container:

   ```js
   import { createSharedUseState } from "react-shared-usestate";

   // A naming convention could be something like useXState:
   export const useCounterState = createSharedUseState(0);
   ```

2. Use your shared state hook almost exactly as you would a regular useState hook (minus the initial state):

   ```js
   import { useCounterState } from "./state";

   const Counter = props => {
     const [count, setCount] = useCounterState();

     return <button onClick={() => setCount(count + 1)}>{count}</button>;
   };
   ```

## API

### Table of contents

- [function createSharedUseState](#function-createsharedusestate)
- [type ReactUseStateHook](#type-reactusestatehook)
- [type ReactUseStateSetter](#type-reactusestatesetter)
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

**Type:** [function](https://mdn.io/function)

| Parameter  | Type | Description |
| :--------- | :--- | :---------- |
| `newState` | \*   | A new state |

### type ReactUseStateState

**Type:** \*
