import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: 0,
    mobile: 0,
    age: 0,
    gender: 0,
    email: 0,
    address: 0,
    city: 0,
    state: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        nameUpdateHandler(state) {
            state.name = "Hello World"
        },
        updateName(state, action) {
            // console.log(action)
            state.name = action.payload
        }
    },
})

export const {
    nameUpdateHandler,
    updateName
} = counterSlice.actions;

export default counterSlice.reducer


// const obj = {
//     name: "",
//     mobile: "",
//     age: "",
// };

// const name = obj.name;
// const age = obj.age;
// const mobile = obj.mobile

// const { name, age, mobile } = obj