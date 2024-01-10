import React, { useState } from "react";

const Todo = () => {

    const [value, setValue] = useState("");
    const [arr, setArray] = useState([
        {
            id: "1",
            value: "Item-1",
            check: false
        },
        {
            id: "2",
            value: "Item-2",
            check: false
        }
    ]);

    const addHander = (event) => {

        const obj ={
            id: arr.length,
            value,
            check: false
        }

        setArray([...arr, obj]) // push
        setValue("");
    }

    const inputHandler = (event) => {
        setValue(event.target.value);
    }

    const editHandler = (id) => {
        const obj = arr.find(item => item.id === id);
        setValue(obj.value);

        const data = arr.filter(a => a.id !== id) // [4,56,,454,45]
        setArray(data);
    }

    const deleteItem = (item) => {
        console.log(arr);
        setArray(arr.filter(a => a !== item));
        console.log(arr);
    }

    const checkboxHandler = (event, id) => {
        const obj = arr.find(item => item.id === id);
        obj.check = !obj.check;

        setArray([...arr]);
    }

    return (
        <div>
            <h1>TODO List</h1>
            <input type="text" onChange={inputHandler} value={value} />
            <button onClick={addHander}>Add</button>
            <ul>
                {arr.map((item, idx) => {
                    return (
                        <li key={idx} className={!item.check ? "" : "line"}>

                            {item.value}

                            <input type="checkbox"
                                onChange={(e) => checkboxHandler(e, item.id)} checked={item.check} />

                            {item.check ?
                                null
                                :
                                <>
                                    <button onClick={() => editHandler(item.id)}>Edit</button>
                                    <button onClick={() => deleteItem(item)}>Delete</button>
                                </>
                            }
                        </li>
                    )
                }
                )}
            </ul>
        </div>
    )
}

export default Todo;