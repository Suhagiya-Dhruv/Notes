import { configureStore } from '@reduxjs/toolkit'
import counter from "../slice/couter"

export const store = configureStore({
    reducer: {
        counter: counter
    },
})