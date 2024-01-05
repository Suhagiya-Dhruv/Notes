import React, { useState } from "react";

const Todo = () => {

    const [value, setValue] = useState("");
    const [arr, setArray] = useState([]);

    const addHander = (event) => {
        setArray([...arr, value]) // push
        setValue("");
    }

    const inputHandler = (event) => {
        setValue(event.target.value);
    }

    const editHandler = (item) => {
        setValue(item)
        const data = arr.filter(a => a !== item) // [4,56,,454,45]
        setArray(data);
    }

    const deleteItem = (item) => {
        console.log(arr);
        setArray(arr.filter(a => a !== item));
        console.log(arr);
    }

    return (
        <div>
            <h1>TODO List</h1>
            <input type="text" onChange={inputHandler} value={value} />
            <button onClick={addHander}>Add</button>
            <ul>
                {arr.map((item, idx) => {
                    return (
                        <li key={idx}>{item} <button onClick={() => editHandler(item)}>Edit</button> <button onClick={() => deleteItem(item)}>Delete</button></li>
                    )
                }
                )}
            </ul>
        </div>
    )
}

export default Todo;