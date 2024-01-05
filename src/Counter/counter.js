import React, { useState } from 'react'

let inputValue = 0; // variable

const Counter = () => {

    const [value, setValue] = useState(0); // state

    // const [inputValue, setValue] = useState(0);

    function increment() {
        setValue(value + 1);
    }

    const decrement = () => {
        if (value > inputValue) {
            setValue(value - 1);
        }
    }

    function inputHandler(event) {
        inputValue = Number(event.target.value);
        setValue(Number(event.target.value))
    }

    console.log(value, inputValue);

    return (
        <div>
            <h1 className='counter'>Counter</h1>
            <input type="number" onChange={inputHandler} />
            <button onClick={increment}>+</button>
            <span>{value}</span>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter;