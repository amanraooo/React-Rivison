import React, { useEffect, useState } from 'react'

const ConditionalEffect = () => {

    const [count, setCount] = useState(0);
    const [isEven, setIsEven] = useState(false)
    function Increment() {
        setCount(count + 1);
    }
    useEffect(() => {
        if (count % 2 === 0) {
            setIsEven(true)
            console.log('the num is even', count)
        }
        else {
            setIsEven(false)
            console.log('the num is odd', count)

        }
    })
    return (
        <div>
            <p>{count}</p>
            {
                isEven ? "num is even" : "num is odd"
            }
            <br />
            <button onClick={() => Increment()}>Increment</button>
        </div>
    )
}

export default ConditionalEffect
