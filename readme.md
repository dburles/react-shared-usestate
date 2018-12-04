# react-shared-usestate

[![npm version](https://badgen.net/npm/v/react-shared-usestate)](https://npm.im/react-shared-usestate) [![Build status](https://travis-ci.org/dburles/react-shared-usestate.svg?branch=master)](https://travis-ci.org/dburles/react-shared-usestate)

Micro libary for creating global React useState hooks.

Demo: <https://codesandbox.io/s/py5yzmy9jm>

### Usage

1. Create a shared state container:

```js
import { createSharedUseState } from 'react-shared-usestate'

// A naming convention could be something like useXState:
export const useCounterState = createSharedUseState(0)
```

2. Use your shared state hook almost exactly as you would a regular useState hook (minus the initial state):

```js
import { useCounterState } from './state'

const Counter = props => {
  const [count, setCount] = useCounterState()

  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

## API

### Table of contents

- [function createSharedUseState](#function-createsharedusestate)

### function createSharedUseState

Creates a shared state container.

| Parameter      | Type | Description       |
| :------------- | :--- | :---------------- |
| `initialState` | \*?  | An initial state. |

**Returns:** [function](https://mdn.io/function) — A React hook.
