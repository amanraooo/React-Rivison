import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increase}>click to increase</button>
            <button onClick={decrease}>click to decrease</button>
            <button onClick={reset}>reset to 0</button>
        </div>
    )
}

export default Counter
