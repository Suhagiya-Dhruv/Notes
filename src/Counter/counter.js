import React, { useState } from 'react'

const Counter = () => {

    const [value, setValue] = useState(0);

    function increment() {
        setValue(value+1);
    }

    const decrement = () => {
        setValue(value-1);
    }

    return (
        <div>
            <h1 className='counter'>Counter</h1>
            <button onClick={increment}>+</button>
            <span>{value}</span>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter;